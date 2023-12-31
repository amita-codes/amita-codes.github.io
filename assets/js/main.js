document.addEventListener(
  "DOMContentLoaded",
  function () {
    new SweetScroll({}),
      particlesJS("particles-js", {
        particles: {
          number: { value: 30, density: { enable: !0, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: {
            type: "polygon",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: !1,
            anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
          },
          size: {
            value: 3,
            random: !0,
            anim: {
              enable: !1,
              speed: 19.18081918081918,
              size_min: 0.1,
              sync: !1,
            },
          },
          line_linked: {
            enable: !0,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: !0,
            speed: 4,
            direction: "none",
            random: !0,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: { enable: !1, rotateX: 600, rotateY: 1200 },
          },
          nb: 80,
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: !1, mode: "grab" },
            onclick: { enable: !0, mode: "push" },
            resize: !0,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: !0,
      });

    function createEduDesk() {
      const eduDeskContainer = document.getElementById("eduDesk");

      // Function to create an image container
      function createImageContainer(imageSrc) {
        const container = document.createElement("div");
        container.style.margin = "10px";
        container.style.padding = "10px";
        container.style.height = "150px";
        container.style.width = "150px";
        container.style.borderRadius = "50%";
        container.style.boxShadow = "0px 10px 5px -5px rgba(0, 0, 0, 0.1)";
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";

        const image = document.createElement("img");
        image.src = imageSrc;
        image.style.width = "100%";
        image.style.height = "100%";
        image.style.borderRadius = "50%";

        container.appendChild(image);
        return container;
      }

      // Function to create a text container
      function createTextContainer(title, subtitle, date, description) {
        const container = document.createElement("div");
        container.style.textAlign = "left";
        container.style.marginLeft = "20px";

        const titleElement = document.createElement("h3");
        titleElement.textContent = title;
        titleElement.style.fontSize = "28px";
        titleElement.style.fontWeight = "bold";

        const subtitleElement = document.createElement("p");
        subtitleElement.textContent = subtitle;
        subtitleElement.style.fontSize = "20px";
        subtitleElement.style.fontWeight = "600";

        const dateElement = document.createElement("p");
        dateElement.textContent = date;
        dateElement.style.fontSize = "22px";

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = description;
        descriptionElement.style.fontSize = "22px";
        descriptionElement.style.color = "grey";

        container.appendChild(titleElement);
        container.appendChild(subtitleElement);
        container.appendChild(dateElement);
        container.appendChild(descriptionElement);

        return container;
      }

      // Education details
      const eduDetails = [
        {
          imageSrc: "assets/images/gitam.png",
          title: "GITAM University, Hyderabad",
          subtitle: "Bachelor's in Computer Science Engineering",
          date: "2017 - 2021",
          description:
            "•  Participated in Rural Development and Social Events as Student Volunteer in NSS for 2 years",
        },
        {
          imageSrc: "assets/images/narayana.png",
          title: "Narayana Junior College, Hyderabad",
          subtitle: "Intermediate in MPC stream",
          date: "2015 - 2017",
        },
        {
          imageSrc: "assets/images/school.png",
          title: "St. John's High School, Karimnagar",
          subtitle: "Board of Secondary Education Telangana",
          date: "2015",
        },
      ];

      eduDetails.forEach((edu) => {
        const eduContainer = document.createElement("div");
        eduContainer.style.display = "flex";
        eduContainer.appendChild(createImageContainer(edu.imageSrc));
        eduContainer.appendChild(
          createTextContainer(
            edu.title,
            edu.subtitle,
            edu.date,
            edu.description
          )
        );

        eduDeskContainer.appendChild(eduContainer);
        eduDeskContainer.appendChild(document.createElement("br"));
      });
    }

    createEduDesk();
  },
  !1
);
