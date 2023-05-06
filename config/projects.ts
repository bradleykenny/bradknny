import { ICard } from "@/model/Card";

import CommunicateFeedImage from "../public/screenshots/communicate_feed.png";
import CommunicateLoginImage from "../public/screenshots/communicate_login.png";
import ProjectsImage from "../public/screenshots/onepage_projects.png";

export const projects: ICard[] = [
    {
        title: "simple-restaurant-app",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt fringilla lectus, eu pellentesque orci dignissim sed. Nunc dapibus luctus metus, a aliquam felis egestas non. Proin sed magna pulvinar, venenatis quam ornare, fringilla enim.",
        // image:  ProjectsImage,
        colSpan: 1,
    },
    {
        title: "one:page",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt fringilla lectus, eu pellentesque orci dignissim sed. Nunc dapibus luctus metus, a aliquam felis egestas non. Proin sed magna pulvinar, venenatis quam ornare, fringilla enim.",
        // image:  ProjectsImage,
        colSpan: 2,
    },
    {
        title: "communicate",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt fringilla lectus, eu pellentesque orci dignissim sed. Nunc dapibus luctus metus, a aliquam felis egestas non.",
        // image:  ProjectsImage,
        colSpan: 2,
        images: [CommunicateFeedImage, CommunicateLoginImage],
    },
    {
        title: "simple-draggable",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt fringilla lectus, eu pellentesque orci dignissim sed.",
        images: [ProjectsImage],
        colSpan: 1,
    },
];
