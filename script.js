const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const codeSnippets = [
  '<div class="container">',
  'function greet(name) {',
  '  console.log(`Hello, ${name}!`);',
  '}',
  'body { margin: 0; padding: 0; }',
  'const app = express();',
  '<button onclick="submit()">Click Me</button>',
  'if (condition) { doSomething(); }',
  '.class { color: #00ff88; }',
  'const data = await fetch(url);',
  '<h1>Welcome to My Portfolio</h1>',
  'app.use(cors());',
  'for (let i = 0; i < 10; i++) {',
  'return <Component />;',
  'sql = SELECT * FROM users;'
];

const fontSize = 16; 
const columns = Math.floor(canvas.width / fontSize);
const drops = [];


for (let i = 0; i < columns; i++) {
  drops[i] = {
    y: Math.random() * canvas.height * -1, 
    speed: Math.random() * 2 + 1, 
    snippet: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
    opacity: 1.2
  };
}

function draw() {
  
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = `${fontSize}px 'Fira Code', monospace`;
  ctx.textBaseline = 'top';
  ctx.shadowColor = 'rgba(0, 255, 136, 0.5)'; 
  ctx.shadowBlur = 8;

  for (let i = 0; i < drops.length; i++) {
    const drop = drops[i];
    
    
    ctx.fillStyle = `rgba(0, 255, 136, ${drop.opacity})`; 
    ctx.fillText(drop.snippet, i * fontSize * 1.5, drop.y);

    
    drop.y += drop.speed;
    drop.opacity -= 0.001; 


    if (drop.y > canvas.height || drop.opacity <= 0) {
      drop.y = Math.random() * -100; 
      drop.speed = Math.random() * 2 + 1;
      drop.opacity = 1.2;
      drop.snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]; 
    }
  }

  
  ctx.shadowBlur = 0;
}

setInterval(draw, 33);


const animatedText = document.getElementById('animatedText');
const texts = ["Sai Chandu.", "a Full Stack Developer.."];
const prefix = "I'm ";
let currentIndex = 0;
let isDeleting = false;
let currentText = '';
let charIndex = 0;

function typeWriter() {
  const fullText = texts[currentIndex];
  
  if (isDeleting) {
   
    if (charIndex > 0) {
      currentText = fullText.substring(0, charIndex - 1);
      charIndex--;
      animatedText.textContent = prefix + currentText;
      setTimeout(typeWriter, 50); 
    } else {
      
      isDeleting = false;
      currentIndex = (currentIndex + 1) % texts.length;
      setTimeout(typeWriter, 200);
    }
  } else {
    if (charIndex < fullText.length) {
      currentText = fullText.substring(0, charIndex + 1);
      charIndex++;
      animatedText.textContent = prefix + currentText;
      setTimeout(typeWriter, 100); 
    } else {
      isDeleting = true;
      setTimeout(typeWriter, 1000); 
    }
  }
}


setTimeout(typeWriter, 1000);


const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});


mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});


const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
 
  const newColumns = Math.floor(canvas.width / fontSize);
  while (drops.length < newColumns) {
    drops.push({
      y: Math.random() * canvas.height * -1,
      speed: Math.random() * 2 + 1,
      snippet: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      opacity: 1.2
    });
  }
  drops.length = newColumns;
});