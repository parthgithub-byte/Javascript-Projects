const quotes = [
  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "Small steps today lead to big victories tomorrow.",
  "Discipline is choosing what you want most over what you want now.",
  "Your future is created by what you do today, not tomorrow.",
  "Dream big. Start small. Act now.",
  "Consistency beats intensity when intensity doesn’t last.",
  "Do something today that your future self will thank you for.",
  "You don’t have to be extreme, just consistent.",
  "Hard days build strong people.",
  "Progress, not perfection.",
  "The pain of discipline is lighter than the pain of regret.",
  "Stay patient and trust your journey.",
  "Success is built on the days you don’t feel like trying.",
  "Make yourself proud.",
  "Energy flows where attention goes.",
  "Growth begins at the end of your comfort zone.",
  "Your only limit is the one you refuse to break.",
  "Keep showing up. That’s half the battle.",
  "Focus on becoming, not impressing.",
  "Live fully, learn endlessly, and love deeply.",
  "Build habits that build you.",
  "Momentum is created by movement.",
  "Comfort zones kill potential.",
  "Win the morning, win the day.",
  "Your standards determine your future.",
  "If it’s important, you’ll find a way.",
  "Excuses are expensive.",
  "Focus beats talent when talent loses focus.",
  "Discomfort is the price of growth.",
  "Action cures overthinking.",
  "What you repeat, you become.",
  "Self-control is real power.",
  "The grind you avoid is the life you delay.",
  "Clarity comes from action, not thought.",
  "Fear shrinks when faced.",
  "Stay dangerous. Stay disciplined.",
  "The version of you tomorrow depends on today.",
  "You are one decision away from change.",
  "Make discipline your default.",
  "Effort compounds like interest.",
  "The silent work pays the loudest.",
  "Chase progress, not applause.",
  "Your habits vote for your identity.",
  "Energy is earned, not wished.",
  "You either suffer discipline or regret.",
  "Doubt kills more dreams than failure.",
  "Master yourself first.",
  "Small wins stack up.",
  "Control your inputs, control your outcomes.",
  "Greatness hides in routine.",
  "Execution beats intention.",
  "Your mindset is your multiplier.",
  "The work works.",
  "Stay focused. Stay humble.",
  "Delayed gratification builds empires.",
  "Outwork your excuses.",
  "Consistency creates confidence.",
  "Earn your confidence.",
  "If you rest, rest. Don’t quit.",
  "Discipline is self-respect.",
  "Intensity attracts results.",
  "Train your mind to stay calm under pressure.",
  "Fall in love with improvement.",
  "You don’t rise to goals, you fall to systems.",
  "Progress is addictive.",
  "Be stronger than your strongest excuse.",
  "Your focus determines your future.",
  "Start messy. Improve daily.",
  "Silence your inner critic with action.",
  "Choose growth over comfort.",
  "Be patient with results, ruthless with effort.",
  "You owe yourself effort.",
  "Success loves preparation.",
  "Pressure reveals potential.",
  "Effort never betrays you.",
  "Act like the person you want to become.",
  "Don’t count days. Make days count.",
  "Strength is built in private.",
  "Protect your peace fiercely.",
  "You become what you tolerate.",
  "Make struggle your teacher.",
  "Stay hungry for improvement.",
  "Resilience beats resistance.",
  "Hard choices, easy life.",
  "Easy choices, hard life.",
  "Keep promises to yourself.",
  "Confidence is built through kept commitments.",
  "Skill grows where attention goes.",
  "Turn pain into fuel.",
  "Discipline sharpens destiny.",
  "You can restart anytime.",
  "Time rewards the focused.",
  "Dreams demand discipline.",
  "Habits outlive motivation.",
  "Stay steady. Stay sharp.",
  "The best investment is self-investment.",
  "Outgrow your old self.",
  "Focus is a superpower.",
  "Make your future jealous of your present effort."
];

const button = document.querySelector('.quote-btn');
const quote = document.querySelector('h1');

button.addEventListener('click', (e)=>{
    quote.style.opacity = 0;
    
    setTimeout(()=>{
        const index = Math.floor(Math.random() * quotes.length); // better version of the above line

        quote.textContent = quotes[index];
        quote.style.opacity=1;
    }, 200);
})

const parent = document.getElementById("parent")

parent.addEventListener('click', (e)=>{
    if (e.target.tagName === "BUTTON"){
        const child = e.target;
        document.body.style.background = child.style.background;
    }
})