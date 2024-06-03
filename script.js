
slideHover = () => {
    let data = [{
        "id": 1,
        "hoverimg": "https://imgs.search.brave.com/I5K_uhZoOsX2kZkPE-IC5beRWH5_EuZSgH-7mbiHxQU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni80OTk3LzQ5OTc1/NDMucG5nP3NlbXQ9/YWlzX2h5YnJpZA",
        "image": "https://images.unsplash.com/photo-1713885248304-5df509967fc1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "heading": "WEB DEVELOPMENT",
        "para": "website development related info in that section"
    }, {
        "id": 2,
        "hoverimg": "https://imgs.search.brave.com/I5K_uhZoOsX2kZkPE-IC5beRWH5_EuZSgH-7mbiHxQU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni80OTk3LzQ5OTc1/NDMucG5nP3NlbXQ9/YWlzX2h5YnJpZA",
        "image": "https://images.unsplash.com/photo-1713847243126-ff9ec9b40db9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "heading": "WEB DEVELOPMENT",
        "para": "website development related info in that section"
    }, {
        "id": 3,
        "hoverimg": "https://imgs.search.brave.com/I5K_uhZoOsX2kZkPE-IC5beRWH5_EuZSgH-7mbiHxQU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni80OTk3LzQ5OTc1/NDMucG5nP3NlbXQ9/YWlzX2h5YnJpZA",
        "image": "https://images.unsplash.com/photo-1713810211578-87d0dc635917?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "heading": "WEB DEVELOPMENT",
        "para": "website development related info in that section"
    }, {
        "id": 4,
        "hoverimg": "https://imgs.search.brave.com/I5K_uhZoOsX2kZkPE-IC5beRWH5_EuZSgH-7mbiHxQU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni80OTk3LzQ5OTc1/NDMucG5nP3NlbXQ9/YWlzX2h5YnJpZA",
        "image": "https://images.unsplash.com/photo-1713952216280-294a8665ea63?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "heading": "WEB DEVELOPMENT",
        "para": "website development related info in that section"
    }, {
        "id": 5,
        "hoverimg": "https://imgs.search.brave.com/I5K_uhZoOsX2kZkPE-IC5beRWH5_EuZSgH-7mbiHxQU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni80OTk3LzQ5OTc1/NDMucG5nP3NlbXQ9/YWlzX2h5YnJpZA",
        "image": "https://images.unsplash.com/photo-1690575539214-eb0ade6cdd4d?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "heading": "WEB DEVELOPMENT",
        "para": "website development related info in that section"
    }, {
        "id": 6,
        "hoverimg": "https://imgs.search.brave.com/I5K_uhZoOsX2kZkPE-IC5beRWH5_EuZSgH-7mbiHxQU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni80OTk3LzQ5OTc1/NDMucG5nP3NlbXQ9/YWlzX2h5YnJpZA",
        "image": "https://images.unsplash.com/photo-1713184355726-d3a31d822fcc?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "heading": "WEB DEVELOPMENT",
        "para": "website development related info in that section"
    }, {
        "id": 7,
        "hoverimg": "https://imgs.search.brave.com/I5K_uhZoOsX2kZkPE-IC5beRWH5_EuZSgH-7mbiHxQU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni80OTk3LzQ5OTc1/NDMucG5nP3NlbXQ9/YWlzX2h5YnJpZA",
        "image": "https://images.unsplash.com/photo-1713815540178-8322b898a2c4?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "heading": "WEB DEVELOPMENT",
        "para": "website development related info in that section"
    }, {
        "id": 8,
        "hoverimg": "https://imgs.search.brave.com/I5K_uhZoOsX2kZkPE-IC5beRWH5_EuZSgH-7mbiHxQU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni80OTk3LzQ5OTc1/NDMucG5nP3NlbXQ9/YWlzX2h5YnJpZA",
        "image": "https://images.unsplash.com/photo-1713774590628-6af0be775ef0?q=80&w=1487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "heading": "WEB DEVELOPMENT",
        "para": "website development related info in that section"
    }]
    let imagessliderhover = document.querySelector(".slider");
    let bgimage = document.querySelector(".images");
    let hoverimage = document.querySelector(".imgslider-items");
    console.log(data)

    data.forEach(element => {
        imagessliderhover.innerHTML += `<div class="images">
        <img src="${element.image}" class="bg-image-slider" alt="">

                        <div class="imgslider-items">

                            <img src="${element.hoverimg}" alt="">
                            <h3>${element.heading}</h3>
                            <p>${element.para}</p>
                            <button><a href="">READ MORE</a></button>
                        </div>
                    </div>`;
    });

}

slideHover()

imageScroll = () => {
    let imagegallary = document.querySelector(".page2-imgslider")
    let startbtn = document.querySelector(".sliderbtn .start");
    let midbtn = document.querySelector(".sliderbtn .mid");
    let endbtn = document.querySelector(".sliderbtn .end");

    imagegallary.addEventListener("wheel", (data) => {
        imagegallary.scrollLeft += data.deltaY;
        imagegallary.computedStyleMap.scrollBehavior = "auto"
    })
    endbtn.addEventListener("click", (data) => {
        imagegallary.scrollLeft += 1260;
        imagegallary.style.scrollBehavior = "smooth"
        endbtn.style.color = "#fe3146";
        startbtn.style.color = "black";
        midbtn.style.color = "black";

    })
    startbtn.addEventListener("click", (data) => {
        imagegallary.scrollLeft -= 1260;
        imagegallary.style.scrollBehavior = "smooth"
        startbtn.style.color = "#fe3146";
        midbtn.style.color = "black";
        endbtn.style.color = "black";

    })
    midbtn.addEventListener("click", (data) => {
        imagegallary.scrollLeft += 640;
        imagegallary.style.scrollBehavior = "smooth"
        midbtn.style.color = "#fe3146";
        startbtn.style.color = "black";
        endbtn.style.color = "black";

    })
}
imageScroll()



ourProjects = () => {
    let images = document.querySelector(".page4-images img");
    let project1 = document.querySelector(".option-1");
    let project2 = document.querySelector(".option-2");
    let project3 = document.querySelector(".option-3");

    project1.addEventListener("click", () => {
        images.src = 'https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        project1.style.backgroundColor = "#fe3146";
        project1.style.color = "white";

        project2.style.backgroundColor = "white";
        project2.style.color = "black";

        project3.style.backgroundColor = "white";
        project3.style.color = "black";
    })
    project2.addEventListener("click", () => {
        images.src = 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        project2.style.backgroundColor = "#fe3146";
        project2.style.color = "white";

        project1.style.backgroundColor = "white";
        project1.style.color = "black";

        project3.style.backgroundColor = "white";
        project3.style.color = "black";
    })
    project3.addEventListener("click", () => {
        images.src = 'https://images.unsplash.com/photo-1613744358026-dd879eba3a8a?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        project3.style.backgroundColor = "#fe3146";
        project3.style.color = "white";

        project1.style.backgroundColor = "white";
        project1.style.color = "black";

        project2.style.backgroundColor = "white";
        project2.style.color = "black";
    })


}
ourProjects()


clientfeedback = () => {
    let feedback = [{
        "text": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, unde.
                        Natus, veniam
                        obcaecati? Possimus laboriosam praesentium minima error distinctio omnis.`,
        "client": "JANNAT TUMPA",
        "position": "-COO,AMERIMAR ENTERPRISES, INC."
    }, {
        "text": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, unde.
                        Natus, veniam
                        obcaecati? Possimus laboriosam praesentium minima error distinctio omnis.`,
        "client": "PRANIT TUMPA",
        "position": "-COO,AMERIMAR ENTERPRISES, INC."
    }, {
        "text": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, unde.
                        Natus, veniam
                        obcaecati? Possimus laboriosam praesentium minima error distinctio omnis.`,
        "client": "OMKAR TUMPA",
        "position": "-COO,AMERIMAR ENTERPRISES, INC."
    }, {
        "text": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, unde.
                        Natus, veniam
                        obcaecati? Possimus laboriosam praesentium minima error distinctio omnis.`,
        "client": "RAJESH TUMPA",
        "position": "-COO,AMERIMAR ENTERPRISES, INC."
    }];
    let currentindex = 0;
    let feedbackcontent = document.querySelector(".client-feedbacks");
    showFeedback = () => {

        let info = feedback[currentindex];
        feedbackcontent.innerHTML = `<div class="feedback-1">
                        <p class="feedback-text">${info.text}</p>
                        <div class="about-feedback">
                            <h3>${info.client}</h3>
                            <p>${info.position}</p>
                        </div>
                    </div>`;
        currentindex = (currentindex + 1) % feedback.length;

    }
    showFeedback();
    setInterval(showFeedback, 10000)
}

clientfeedback()