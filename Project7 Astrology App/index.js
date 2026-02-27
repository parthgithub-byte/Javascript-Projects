// general results by an astrology app are: zodiac signs, compliments, sympathy complements, recommended things to do and predictions.

const zodiacSigns = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius"
]

// list of different complements
const compliments = [
    "You have an incredible ability to make everyone around you feel valued.",
    "Your creativity and originality never cease to amaze those around you.",
    "You handle difficult situations with such grace and composure.",
    "The way you carry yourself inspires confidence in everyone you meet.",
    "Your kindness has a ripple effect that reaches further than you know.",
    "You have a gift for seeing the best in people even when they can't see it themselves.",
    "Your passion for what you do is genuinely contagious.",
    "You make hard things look effortless, and that is a rare talent.",
    "The world is a noticeably better place because you are in it.",
    "Your ability to listen makes people feel truly heard and understood.",
    "You bring a kind of calm to chaotic situations that most people can only dream of.",
    "Your sense of humor has a way of lifting the heaviest of moods.",
    "You are the kind of person people feel lucky to have in their corner.",
    "Your honesty is a breath of fresh air in a world full of noise.",
    "You have a warmth about you that makes strangers feel like old friends.",
    "The thoughtfulness you put into everything you do sets you apart.",
    "Your resilience in the face of challenges is nothing short of remarkable.",
    "You have an eye for beauty in places most people would walk right past.",
    "Your ambition is matched perfectly by your humility, and that is rare.",
    "You make people want to be better just by being yourself.",
    "Your energy walks into a room before you do, and it is always welcome.",
    "You have the kind of loyalty that people spend their whole lives looking for.",
    "The care you put into the small details says everything about your character.",
    "You are far more capable than you give yourself credit for.",
    "Your perspective on things has a way of shifting how others see the world.",
    "You carry kindness not as a habit but as a core part of who you are.",
    "Your dedication is the kind that quietly moves mountains over time.",
    "You have a natural ability to turn ordinary moments into memorable ones.",
    "The courage it takes to be genuinely yourself is something worth admiring.",
    "You leave every room, every conversation, and every person a little better than you found them."
]

// for sympathy that draws attention
const victimCardCompliments = [
    "Even through everything you have been through, you still show up every single day.",
    "The weight you carry would have broken most people, but not you.",
    "You have survived things that others would not even know how to face.",
    "The fact that you are still standing after all of that says everything.",
    "You have been dealt an unfair hand more than once and you keep playing anyway.",
    "Most people have no idea how much strength it takes just to get through your average day.",
    "You have had to fight for things others were simply handed, and you did it without flinching.",
    "The odds were stacked against you and you refused to let that be the end of your story.",
    "You carry battles that nobody else can see, and you carry them with quiet dignity.",
    "What you have endured would have made anyone else give up a long time ago.",
    "You have had to rebuild yourself more than once, and each time you came back stronger.",
    "The world has not always been kind to you, but your heart stayed kind regardless.",
    "You have had to work twice as hard just to get to the same starting line as everyone else.",
    "Nobody handed you anything, and everything you have you earned through real struggle.",
    "You have known loss and hardship in ways that most people only read about.",
    "The chapter you are in right now is one of the hardest, and you are still pushing forward.",
    "You have had to grow up faster and harder than anyone should ever have to.",
    "There are wounds behind your smile that most people will never know existed.",
    "You have faced things alone that you should never have had to face without support.",
    "After everything life has thrown at you, the fact that you still choose hope is remarkable."
]

// solutions
const recommendedKarma = [
    "Try doing one small act of kindness today with no expectation of anything in return.",
    "Reach out to someone you have been meaning to check in on but keep putting off.",
    "Let go of one grudge you have been holding onto longer than it deserves.",
    "Spend a few minutes today genuinely listening to someone without thinking of your response.",
    "Leave a place a little cleaner than you found it, even if you did not make the mess.",
    "Say something encouraging to someone who looks like they are having a hard day.",
    "Donate something you no longer need to someone who could actually use it.",
    "Apologize to someone you know you have wronged, even if time has passed.",
    "Share a skill or piece of knowledge with someone who would benefit from it.",
    "Put your phone away and give someone your full and undivided attention today.",
    "Stand up for someone who is not in the room to defend themselves.",
    "Write down three things you genuinely appreciate about someone and tell them.",
    "Volunteer an hour of your time to a cause that has nothing to do with your own gain.",
    "Forgive yourself for something you have been carrying guilt over for too long.",
    "Be patient with someone who is slower, less experienced, or simply having a rough time.",
    "Celebrate someone else's win as loudly as you would celebrate your own.",
    "Do a favor for someone and actively resist the urge to bring it up later.",
    "Spend time with someone who is lonely, even if you have a full schedule.",
    "Challenge one of your own biases by genuinely seeking a perspective different from yours.",
    "Plant something, help something grow, or simply take care of something living today."
]

// predictions
const predictions = [
    "A unexpected conversation in the coming days will shift the way you see a long standing problem.",
    "Someone from your past is thinking about reaching out to you, and they will soon.",
    "A door you thought was permanently closed is about to show you a way back in.",
    "The opportunity you have been waiting for is closer than your doubt is letting you believe.",
    "A small decision you make this week will quietly set off a chain of positive events.",
    "Someone new is about to enter your life and change the definition of what you thought you wanted.",
    "A period of rest you have been resisting is actually setting you up for your next big leap.",
    "The answer you have been searching for externally has been sitting inside you the whole time.",
    "A challenge heading your way is disguised so well that you will only recognize it as a gift in hindsight.",
    "Your financial situation is about to shift in a direction that will finally give you some breathing room.",
    "A creative idea you have been dismissing as unrealistic is closer to possible than you think.",
    "Someone in your circle is quietly rooting for you harder than you would ever expect.",
    "A habit you build in the next thirty days will compound into something significant by year's end.",
    "The version of yourself you have been working toward is about to become your everyday reality.",
    "A moment of unexpected clarity is coming that will make a foggy decision suddenly obvious.",
    "Travel or a change of environment in your near future will reignite something inside you.",
    "A relationship in your life is about to deepen in a way that genuinely surprises you both.",
    "Something you put out into the world a long time ago is about to find its way back to you.",
    "The timing you have been frustrated about is actually protecting you from something you cannot yet see.",
    "A version of success that fits you far better than your current goal is quietly making its way to you."
]

// out of all the outputs, only the zodiac signs result has the fixed answer based on birthdate
const cutoffs = [19,18,20,19,20,20,22,22,22,22,21,21];

function getZodiacSign(day,month){
    const index = month-1;
    if (day<=cutoffs[index]) return zodiacSigns[index];
    return zodiacSigns[(index+1)%12];
}

const form = document.getElementById('astroForm');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const today = new Date().getDate();

    const text = `Hi ${name}, Your Zodiac Sign (solar) is ${getZodiacSign(day,month)}. ${compliments[(year-day*month)%compliments.length]} ${victimCardCompliments[(year*name.length)%victimCardCompliments.length]} ${predictions[(day*month*year*surname.length*today)%predictions.length]}`;
    document.getElementById('result').textContent = text;
})