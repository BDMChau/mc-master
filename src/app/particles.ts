export const particles_bg = {
  particles: {
    number: {
      value: window.innerWidth / 8,
      density: {
        enable: false
      },
    },
    color: {
      value: ["#9e9e9e", "#757575", "#656565"]
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 5,
      random: true,
      anim: {
        speed: 2,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false
    },
    move: {
      random: true,
      speed: 1,
      direction: "top",
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        size: 1,
        opacity: 0.2,
      },
      repulse: {
        distance: 150,
        duration: 1,
      }
    }
  }
};
