const btn = `
<div class="wrapper">
<input type="checkbox">
<div class="video">
  <video src="https://drive.google.com/uc?export=download&id=1SGC8eoLstgT6_qMy82wUQ3QRpG4r3Wpr" loop muted autoplay playsinline></video>
</div>
<div class="text">
  <span data-text="Explore"></span>
</div>
</div>

<style>
.wrapper {
    font-family: Mark Pro, sans-serif;
    --color: #1F242D;
    --color-invert: #ffffff;
    --clip-path: circle(15px at left);
    --clip-path-hover: circle(50px at left);
    --clip-path-clicked: circle(100vw at left);
    --duration: .4s;
    --timing-function: ease;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .wrapper .video {
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    -webkit-clip-path: var(--clip-path);
            clip-path: var(--clip-path);
    transition: -webkit-clip-path var(--duration) var(--timing-function);
    transition: clip-path var(--duration) var(--timing-function);
    transition: clip-path var(--duration) var(--timing-function), -webkit-clip-path var(--duration) var(--timing-function);
  }
  .wrapper .video video {
    position: fixed;
   
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
  }
  .wrapper .text {
    position: relative;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 4px;
    opacity: var(--opacity, 1);
    transition: opacity 0.3s var(--timing-function) 0.2s;
  }
  .wrapper .text::before, .wrapper .text::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -1px;
    right: 25px;
    height: 0;
  }
  .wrapper .text::before {
    box-shadow: 26px 0 0 1px white;
    right: var(--r, 100%);
    opacity: var(--opacity, 0);
    transition: right 0.5s ease-in, opacity 0.1s linear;
  }
  .wrapper .text::after {
    box-shadow: 26px 0 0 1px var(--color-invert);
    -webkit-clip-path: var(--clip-path);
            clip-path: var(--clip-path);
    transition: -webkit-clip-path var(--duration) var(--timing-function);
    transition: clip-path var(--duration) var(--timing-function);
    transition: clip-path var(--duration) var(--timing-function), -webkit-clip-path var(--duration) var(--timing-function);
  }
  .wrapper .text > span::before, .wrapper .text > span::after {
    content: attr(data-text);
    padding-left: 26px;
  }
  .wrapper .text > span::before {
    color: white;
  }
  .wrapper .text > span::after {
    color: white;
    -webkit-clip-path: var(--clip-path);
            clip-path: var(--clip-path);
    transition: -webkit-clip-path var(--duration) var(--timing-function);
    transition: clip-path var(--duration) var(--timing-function);
    transition: clip-path var(--duration) var(--timing-function), -webkit-clip-path var(--duration) var(--timing-function);
    position: absolute;
    left: 0;
  }
  .wrapper input {
    width: 220px;
    height: 40px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    border-radius: 40px;
    outline: none;
    z-index: 2;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    cursor: pointer;
  }
  .wrapper input:focus {
    outline: 0;
  }
  .wrapper input:hover ~ .video {
    -webkit-clip-path: var(--clip-path-hover);
            clip-path: var(--clip-path-hover);
  }
  .wrapper input:hover ~ .text::before {
    --r: 25px;
    --opacity: 1;
  }
  .wrapper input:hover ~ .text::after {
    -webkit-clip-path: var(--clip-path-hover);
            clip-path: var(--clip-path-hover);
  }
  .wrapper input:hover ~ .text > span::after {
    -webkit-clip-path: var(--clip-path-hover);
            clip-path: var(--clip-path-hover);
  }
  .wrapper input:checked {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
  
  .wrapper input:checked ~ .text::after {
    -webkit-clip-path: var(--clip-path-clicked);
            clip-path: var(--clip-path-clicked);
  }
  .wrapper input:checked ~ .text > span::after {
    -webkit-clip-path: var(--clip-path-clicked);
            clip-path: var(--clip-path-clicked);
  }
  
</style>`;

export default function Explore() {
  return <div dangerouslySetInnerHTML={{ __html: btn }}></div>;
}
