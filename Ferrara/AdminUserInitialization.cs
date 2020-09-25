﻿using System.Configuration.Provider;
using System.Web.Security;
using EPiServer.Framework;
using EPiServer.Framework.Initialization;
using EPiServer.Logging.Compatibility;
using Microsoft.AspNet.Identity.EntityFramework;
using EPiServer.Cms.UI.AspNetIdentity;
using System.Linq;
using Microsoft.AspNet.Identity;
using System.Collections.Generic;
using System;

namespace Ferrara.Business.Initialization
{
    [InitializableModule]
    [ModuleDependency(typeof(EPiServer.Web.InitializationModule))]
    public class EpiserverInitialization : IInitializableModule
    {
        private static readonly string[] _roles = { "Administrators" };

        public void Initialize(InitializationEngine context)
        {
            using (UserStore<ApplicationUser> store = new UserStore<ApplicationUser>(new ApplicationDbContext<ApplicationUser>("EPiServerDB")))
            {
                //If there's already a user, then we don't need a seed
                if (!store.Users.Any(x => x.UserName == "ferraraadmin"))
                {
                    var createdUser = CreateUser(store, "ferraraadmin", "spr2020!", "ferrara@mysite.com");
                    AddUserToRoles(store, createdUser, _roles);
                    store.UpdateAsync(createdUser).GetAwaiter().GetResult();
                }
            }
        }

        private ApplicationUser CreateUser(UserStore<ApplicationUser> store, string username, string password, string email)
        {
            //We know that this Password hasher is used as it's configured
            IPasswordHasher hasher = new PasswordHasher();
            string passwordHash = hasher.HashPassword(password);

            ApplicationUser applicationUser = new ApplicationUser
            {
                Email = email,
                EmailConfirmed = true,
                LockoutEnabled = true,
                IsApproved = true,
                UserName = username,
                PasswordHash = passwordHash,
                SecurityStamp = Guid.NewGuid().ToString()
            };

            store.CreateAsync(applicationUser).GetAwaiter().GetResult();

            //Get the user associated with our username
            ApplicationUser createdUser = store.FindByNameAsync(username).GetAwaiter().GetResult();
            return createdUser;
        }

        private void AddUserToRoles(UserStore<ApplicationUser> store, ApplicationUser user, string[] roles)
        {
            IUserRoleStore<ApplicationUser, string> userRoleStore = store;
            using (var roleStore = new RoleStore<IdentityRole>(new ApplicationDbContext<ApplicationUser>("EPiServerDB")))
            {
                IList<string> userRoles = userRoleStore.GetRolesAsync(user).GetAwaiter().GetResult();
                foreach (string roleName in roles)
                {
                    if (roleStore.FindByNameAsync(roleName).GetAwaiter().GetResult() == null)
                    {
                        roleStore.CreateAsync(new IdentityRole { Name = roleName }).GetAwaiter().GetResult();
                    }
                    if (!userRoles.Contains(roleName))
                        userRoleStore.AddToRoleAsync(user, roleName).GetAwaiter().GetResult();
                }
            }
        }

        public void Uninitialize(InitializationEngine context)
        {
        }

        public void Preload(string[] parameters)
        {
        }
    }
}