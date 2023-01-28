const videoContainer = document.getElementById('header-video');

const video = document.createElement('iframe');
video.setAttribute('src', 'https://www.youtube.com/embed/AZals4U6Z_I');
video.setAttribute('frameborder', '0');
video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
video.setAttribute('allow', 'autoplay; encrypted-media');
video.style.width = '100%';
video.style.height = '100%';


videoContainer.append(video);