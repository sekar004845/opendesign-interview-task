// Testimonial Slider
/* SLIDER DATA */

    const testimonialVideos = [

      {
        thumb:"images/testimonial-1.webp",
        video:"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
      },

      {
        thumb:"images/testimonial-2.webp",
        video:"https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1"
      },

      {
        thumb:"images/testimonial-3.webp",
        video:"https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=1"
      },

      {
        thumb:"images/testimonial-4.webp",
        video:"https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1"
      },

      {
        thumb:"images/testimonial-5.webp",
        video:"https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1"
      },

      {
        thumb:"images/testimonial-1.webp",
        video:"https://www.youtube.com/embed/oUFJJNQGwhk?autoplay=1"
      },

      {
        thumb:"images/testimonial-2.webp",
        video:"https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1"
      }

    ];

    /* POSITION CLASSES */

    const posClasses = [
      'testimonial-pos0',
      'testimonial-pos6',
      'testimonial-pos5',
      'testimonial-pos4',
      'testimonial-pos3',
      'testimonial-pos2',
      'testimonial-pos1'
    ];

    let currentIndex = 0;

    /* RENDER */

    function renderCarousel(){

      const carousel =
        document.getElementById("testimonial-carousel");

      carousel.innerHTML = "";

      for(let i=0; i<7; i++){

        const itemIndex =
          (currentIndex + i) % testimonialVideos.length;

        const data = testimonialVideos[itemIndex];

        const item = document.createElement("div");

        item.className =
          `testimonial-item ${posClasses[i]}`;

        item.innerHTML = `
          <img src="${data.thumb}" alt="testimonial">
          <div class="testimonial-play-btn">
            <i class="fas fa-play"></i>
          </div>
        `;

        item.onclick = () => openVideo(data.video);

        carousel.appendChild(item);

      }

    }

    /* ROTATE */

    function rotate(direction){

      currentIndex =
        (currentIndex + direction + testimonialVideos.length)
        % testimonialVideos.length;

      renderCarousel();

    }

    /* OPEN VIDEO */

    function openVideo(videoUrl){

      document.getElementById("videoModal").style.display = "flex";

      document.getElementById("youtubeFrame").src = videoUrl;

    }

    /* CLOSE VIDEO */

    function closeVideo(){

      document.getElementById("videoModal").style.display = "none";

      document.getElementById("youtubeFrame").src = "";

    }

    /* CLOSE ON OUTSIDE CLICK */

    document.getElementById("videoModal").addEventListener("click",function(e){

      if(e.target.id === "videoModal"){
        closeVideo();
      }

    });

    renderCarousel();