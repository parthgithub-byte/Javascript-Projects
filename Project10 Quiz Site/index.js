const allQuestions = [
    { question: "Who has the most centuries in international cricket?", options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"], answer: "Sachin Tendulkar" },
    { question: "Which country won the first ICC Cricket World Cup?", options: ["Australia", "England", "West Indies", "India"], answer: "West Indies" },
    { question: "Who is known as the 'God of Cricket'?", options: ["Virat Kohli", "Don Bradman", "MS Dhoni", "Sachin Tendulkar"], answer: "Sachin Tendulkar" },
    { question: "What is the highest individual score in ODI cricket?", options: ["264", "200", "237", "275"], answer: "264" },
    { question: "Which bowler has taken the most wickets in Test cricket?", options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"], answer: "Muttiah Muralitharan" },
    { question: "Who scored the first ever ODI double century?", options: ["Sachin Tendulkar", "Martin Guptill", "Rohit Sharma", "Chris Gayle"], answer: "Sachin Tendulkar" },
    { question: "Which team won the 2011 Cricket World Cup?", options: ["Sri Lanka", "Australia", "India", "Pakistan"], answer: "India" },
    { question: "Who is the highest run scorer in Test cricket?", options: ["Ricky Ponting", "Sachin Tendulkar", "Kumar Sangakkara", "Jacques Kallis"], answer: "Sachin Tendulkar" },
    { question: "What is the maximum number of overs in a standard ODI match per side?", options: ["40", "50", "60", "45"], answer: "50" },
    { question: "Who captained India in the 1983 World Cup victory?", options: ["Sunil Gavaskar", "Dilip Vengsarkar", "Kapil Dev", "Mohinder Amarnath"], answer: "Kapil Dev" },
    { question: "Which country has won the most Cricket World Cups?", options: ["India", "West Indies", "England", "Australia"], answer: "Australia" },
    { question: "Who holds the record for the fastest Test century?", options: ["Viv Richards", "Brendon McCullum", "Adam Gilchrist", "Gilbert Jessop"], answer: "Brendon McCullum" },
    { question: "Which stadium is known as the 'Home of Cricket'?", options: ["MCG", "Eden Gardens", "Lord's", "Wankhede"], answer: "Lord's" },
    { question: "How many players are there in a cricket team?", options: ["10", "11", "12", "9"], answer: "11" },
    { question: "Who scored 400 not out in a single Test innings?", options: ["Sachin Tendulkar", "Brian Lara", "Don Bradman", "Garfield Sobers"], answer: "Brian Lara" },
    { question: "What is Don Bradman's Test batting average?", options: ["79.52", "89.52", "99.94", "95.14"], answer: "99.94" },
    { question: "Which country does Babar Azam represent?", options: ["India", "Bangladesh", "Afghanistan", "Pakistan"], answer: "Pakistan" },
    { question: "Who was the first bowler to take 800 Test wickets?", options: ["Shane Warne", "Anil Kumble", "Muttiah Muralitharan", "Glenn McGrath"], answer: "Muttiah Muralitharan" },
    { question: "What does LBW stand for?", options: ["Leg Before Wicket", "Left Behind Wicket", "Long Before Wide", "Leg Behind Wide"], answer: "Leg Before Wicket" },
    { question: "Which Indian batsman is nicknamed 'The Wall'?", options: ["Sourav Ganguly", "VVS Laxman", "Rahul Dravid", "Anil Kumble"], answer: "Rahul Dravid" },
    { question: "Who hit six sixes in a single over in international cricket?", options: ["Chris Gayle", "Herschelle Gibbs", "Yuvraj Singh", "Both B and C"], answer: "Both B and C" },
    { question: "Which format of cricket has 20 overs per side?", options: ["Test", "ODI", "T20", "The Hundred"], answer: "T20" },
    { question: "Who won the inaugural ICC T20 World Cup in 2007?", options: ["Australia", "Pakistan", "India", "Sri Lanka"], answer: "India" },
    { question: "What is the name of the trophy contested between India and Pakistan in Tests?", options: ["Border-Gavaskar Trophy", "Pataudi Trophy", "Frank Worrell Trophy", "Ashes"], answer: "Pataudi Trophy" },
    { question: "Which player is known as 'Prince of Trinidad'?", options: ["Shivnarine Chanderpaul", "Brian Lara", "Dwayne Bravo", "Chris Gayle"], answer: "Brian Lara" },
    { question: "Who has scored the most runs in T20 International cricket?", options: ["Virat Kohli", "Rohit Sharma", "Martin Guptill", "Babar Azam"], answer: "Virat Kohli" },
    { question: "Which country did Shane Warne play for?", options: ["England", "South Africa", "New Zealand", "Australia"], answer: "Australia" },
    { question: "What is the term for a batsman scoring zero runs?", options: ["Blob", "Duck", "Dot", "Null"], answer: "Duck" },
    { question: "Who is the only player to have taken all 10 wickets in a Test innings?", options: ["Jim Laker", "Anil Kumble", "Both A and B", "Shane Warne"], answer: "Both A and B" },
    { question: "Which team won the 2019 Cricket World Cup?", options: ["New Zealand", "Australia", "India", "England"], answer: "England" },
    { question: "Who holds the record for most sixes in ODI cricket?", options: ["Chris Gayle", "Shahid Afridi", "MS Dhoni", "AB de Villiers"], answer: "Shahid Afridi" },
    { question: "What is the name of the Test series between England and Australia?", options: ["Pataudi Trophy", "Border-Gavaskar Trophy", "The Ashes", "Frank Worrell Trophy"], answer: "The Ashes" },
    { question: "Who was the first Indian to take a Test hat-trick?", options: ["Anil Kumble", "Harbhajan Singh", "Kapil Dev", "Irfan Pathan"], answer: "Harbhajan Singh" },
    { question: "What is the highest team total in ODI cricket?", options: ["481/6", "443/9", "498/4", "509/7"], answer: "498/4" },
    { question: "Which country does Kane Williamson represent?", options: ["Australia", "South Africa", "New Zealand", "England"], answer: "New Zealand" },
    { question: "Who scored the fastest ODI century in terms of balls faced?", options: ["AB de Villiers", "Shahid Afridi", "Chris Gayle", "Corey Anderson"], answer: "AB de Villiers" },
    { question: "How many runs is a standard penalty for a no-ball in ODI cricket?", options: ["1", "2", "5", "4"], answer: "1" },
    { question: "Which Indian player is nicknamed 'Captain Cool'?", options: ["Virat Kohli", "Sourav Ganguly", "MS Dhoni", "Rohit Sharma"], answer: "MS Dhoni" },
    { question: "Who hit the winning six in the 2011 World Cup final?", options: ["Virat Kohli", "Yuvraj Singh", "Sachin Tendulkar", "MS Dhoni"], answer: "MS Dhoni" },
    { question: "Which bowler has the best figures in a T20 International innings?", options: ["Rashid Khan", "Ajantha Mendis", "Lasith Malinga", "Samuel Badree"], answer: "Ajantha Mendis" },
    { question: "What is the term for three wickets in three consecutive deliveries?", options: ["Double wicket", "Hat-trick", "Triple play", "Golden over"], answer: "Hat-trick" },
    { question: "Which country hosted the 2023 Cricket World Cup?", options: ["England", "Australia", "India", "South Africa"], answer: "India" },
    { question: "Who has the most Test appearances as captain for India?", options: ["Sourav Ganguly", "MS Dhoni", "Virat Kohli", "Mohammad Azharuddin"], answer: "Virat Kohli" },
    { question: "What is the name of the trophy between India and Australia in Tests?", options: ["Pataudi Trophy", "Border-Gavaskar Trophy", "Frank Worrell Trophy", "The Ashes"], answer: "Border-Gavaskar Trophy" },
    { question: "Which fielding position is directly behind the batsman?", options: ["Slip", "Gully", "Fine leg", "Square leg"], answer: "Fine leg" },
    { question: "Who was the first player to score 10,000 ODI runs?", options: ["Brian Lara", "Ricky Ponting", "Sachin Tendulkar", "Sourav Ganguly"], answer: "Sachin Tendulkar" },
    { question: "Which country does Kagiso Rabada represent?", options: ["Zimbabwe", "West Indies", "South Africa", "Kenya"], answer: "South Africa" },
    { question: "What does DRS stand for in cricket?", options: ["Decision Review System", "Digital Replay System", "Direct Review Score", "Data Recording System"], answer: "Decision Review System" },
    { question: "Who scored the highest individual score in T20 International cricket?", options: ["Rohit Sharma", "Chris Gayle", "Aaron Finch", "Colin Munro"], answer: "Aaron Finch" },
    { question: "Which player has won the most ICC Player of the Year awards?", options: ["Sachin Tendulkar", "MS Dhoni", "Virat Kohli", "AB de Villiers"], answer: "Virat Kohli" },
    { question: "Who is the fastest bowler ever recorded in cricket?", options: ["Brett Lee", "Shoaib Akhtar", "Jeff Thomson", "Mitchell Starc"], answer: "Shoaib Akhtar" },
    { question: "Which country does Jasprit Bumrah represent?", options: ["Pakistan", "Sri Lanka", "Bangladesh", "India"], answer: "India" },
    { question: "What is the term for a delivery that bounces twice before reaching the batsman?", options: ["No ball", "Wide", "Dead ball", "Bouncer"], answer: "No ball" },
    { question: "Who scored a century on his Test debut for India at Lord's in 1990?", options: ["Sachin Tendulkar", "Sourav Ganguly", "Rahul Dravid", "VVS Laxman"], answer: "Sourav Ganguly" },
    { question: "Which team holds the record for the highest Test innings total?", options: ["Australia", "England", "Sri Lanka", "India"], answer: "Sri Lanka" },
    { question: "What is the color of the ball used in day-night Test matches?", options: ["Red", "White", "Pink", "Orange"], answer: "Pink" },
    { question: "Who has taken the most wickets in ODI cricket?", options: ["Wasim Akram", "Glenn McGrath", "Muttiah Muralitharan", "Waqar Younis"], answer: "Muttiah Muralitharan" },
    { question: "Which Indian bowler is nicknamed 'The Turbanator'?", options: ["Anil Kumble", "Harbhajan Singh", "Ravichandran Ashwin", "Bishan Singh Bedi"], answer: "Harbhajan Singh" },
    { question: "What is the maximum width of a cricket bat?", options: ["3.5 inches", "4.25 inches", "4 inches", "5 inches"], answer: "4.25 inches" },
    { question: "Who captained the West Indies team in their dominant era of the 1970s and 80s?", options: ["Garfield Sobers", "Gordon Greenidge", "Clive Lloyd", "Vivian Richards"], answer: "Clive Lloyd" },
    { question: "Which player scored a famous 281 against England in a 2001 Kolkata Test?", options: ["Sachin Tendulkar", "Rahul Dravid", "VVS Laxman", "Sourav Ganguly"], answer: "VVS Laxman" },
    { question: "What is the length of a cricket pitch in yards?", options: ["20", "22", "24", "18"], answer: "22" },
    { question: "Who won the ICC World Test Championship inaugural final in 2021?", options: ["India", "England", "Australia", "New Zealand"], answer: "New Zealand" },
    { question: "Which bowler dismissed Sachin Tendulkar the most times in Tests?", options: ["Glenn McGrath", "Shane Warne", "Muttiah Muralitharan", "Wasim Akram"], answer: "Glenn McGrath" },
    { question: "What does MCC stand for in cricket governance?", options: ["Modern Cricket Club", "Marylebone Cricket Club", "Melbourne Cricket Club", "Masters Cricket Council"], answer: "Marylebone Cricket Club" },
];

const selected = allQuestions.sort(()=>Math.random()-0.5).slice(0,5);   // first 4 indexes of the randomly sorted object

const form = document.querySelector('form');

const answer = {};
selected.forEach((q,index)=>{
    answer[`q${index+1}`] = q.answer;
})

const submitBtn = document.querySelector('.submit-btn');

selected.forEach((q,index)=>{
    const div = document.createElement('div');
    div.className = 'question';

    div.innerHTML = `
        <p>${index+1}. ${q.question}</p>
        ${q.options.map(option => `
            <label>
                <input type="radio" name="q${index+1}" value="${option}"> ${option}
            </label> <br>
        `).join('')}
    `;

    // here, option was the parameter for the callback of map to select each option from every
    // question defined in the "selected" array/ object
    // the join tag joins al the resultant label tags, below the <p> tag

    form.insertBefore(div, submitBtn); // inserting each of such divs befor the submit button in html
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const data = new FormData(form);
    let finalScore = 0;
    for (let [name,value] of data.entries()){
        if (answer[name]==value){
            finalScore++;
        }
    }

    document.getElementById('out').textContent = `Your score is : ${finalScore} out of 5.`
    form.reset();
})

```
Here, we should not specify the event action for each individual input, since there can be hundreds of questions.
Thus, we just take the form's submitted data using its above selected object, 'form' in a function
FormData() as a parameter. This returns a map of all the entries of the submission. Then, we use a for-of iteration for action to be applied to each submission.
```