interface IinstagramImageElements {
    images: {
        thumbnail: {
            url: string;
        }
    };
    link: string;
};

const instagramApiFetch: Function = async (): Promise<any> => {
    const socialMediaRootDiv = document.getElementById("Social-Media-Image-Root") as HTMLDivElement;

    const response: any = await fetch("/KeeblerInstagramApi");
    const data: string = await response.json();
    const parsedJson: Array<IinstagramImageElements> = JSON.parse(data).data;
    parsedJson.forEach((el: IinstagramImageElements, index: number): void => {
        const imageTag: HTMLImageElement = document.createElement("img");
        imageTag.src = el.images.thumbnail.url;
        imageTag.onclick = (): void => { window.open(el.link); };
        imageTag.setAttribute("class", `Social-Media-Image-${index}`);
        socialMediaRootDiv.appendChild(imageTag);
    });
};

const facebookApiFetch: Function = async (): Promise<any> => {
    const socialMediaRootDiv = document.getElementById("Social-Media-Image-Root") as HTMLDivElement;

    const response: any = await fetch("/KeeblerFacebookApi");
    const data: string = await response.json();
    const h1Tag: HTMLHeadingElement = document.createElement("h1");
    h1Tag.innerHTML = data;
    h1Tag.style.color = "red";
    socialMediaRootDiv.appendChild(h1Tag);
};

const navigateToSocailMediaPageFunction: Function = (URL: string): void => {
    window.open(URL);
}

const socialMediaApiFetch: Function = (urlParam: string): void => {
    switch (urlParam.toLowerCase()) {
        case "instagram":
            instagramApiFetch();
            break;
        case "facebook":
            facebookApiFetch();
            break;
        default:
            console.log("You hit the Default Case on the socialMediaApiFetch() Switch Statement")
            return;
    };
};
