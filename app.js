const questions = [
  
  { 
    question: "What is the form of government of the United States?", 
    answers: ["Republic","Monarchy","Dictatorship","Empire"], 
    correct: "Republic" 
  },

  { question: "What is the supreme law of the land?", 
    answers: ["The Constitution","The President","Congress","The courts"], 
    correct: "The Constitution" },

  { question: "What does the Constitution do?", answers: ["Sets up the government","Declares war","Elects leaders","Collects taxes"], correct: "Sets up the government" },
  { question: "The idea of self-government is in the first three words of the Constitution. What are these words?", answers: ["We the People","In God We Trust","Liberty First","United States Forever"], correct: "We the People" },
  { question: "What is an amendment?", answers: ["A change to the Constitution","A vote","A law","A court ruling"], correct: "A change to the Constitution" },
  { question: "What do we call the first ten amendments?", answers: ["Bill of Rights","Articles","Codes","Federal laws"], correct: "Bill of Rights" },
  { question: "What is one right from the First Amendment?", answers: ["Speech","Driving","Housing","Employment"], correct: "Speech" },
  { question: "How many amendments does the Constitution have?", answers: ["27","10","50","13"], correct: "27" },
  { question: "What did the Declaration of Independence do?", answers: ["Declared independence from Britain","Created laws","Formed Congress","Ended slavery"], correct: "Declared independence from Britain" },
  { question: "What are two rights in the Declaration of Independence?", answers: ["Life and liberty","Taxes and trade","Speech and vote","Work and travel"], correct: "Life and liberty" },

  { question: "What is freedom of religion?", answers: ["Practice any religion or none","Only one religion allowed","Government chooses religion","No religion allowed"], correct: "Practice any religion or none" },
  { question: "What is the economic system in the U.S.?", answers: ["Capitalism","Communism","Socialism","Monarchy"], correct: "Capitalism" },
  { question: "What is the rule of law?", answers: ["Everyone must follow the law","Only leaders follow law","President above law","Judges control everything"], correct: "Everyone must follow the law" },
  { question: "Name one branch of government.", answers: ["Congress","Military","Police","Schools"], correct: "Congress" },
  { question: "What stops one branch from becoming too powerful?", answers: ["Checks and balances","Taxes","Voting","Courts"], correct: "Checks and balances" },

  { question: "Who is in charge of the executive branch?", answers: ["The President","Congress","Courts","Governor"], correct: "The President" },
  { question: "Who makes federal laws?", answers: ["Congress","President","Courts","States"], correct: "Congress" },
  { question: "What are the two parts of Congress?", answers: ["Senate and House","Army and Navy","Courts and states","President and Cabinet"], correct: "Senate and House" },
  { question: "How many U.S. Senators are there?", answers: ["100","50","435","200"], correct: "100" },
  { question: "We elect a U.S. Senator for how many years?", answers: ["6","4","2","8"], correct: "6" },

  { question: "The House has how many members?", answers: ["435","100","50","200"], correct: "435" },
  { question: "We elect a U.S. Representative for how many years?", answers: ["2","4","6","8"], correct: "2" },
  { question: "Who does a Senator represent?", answers: ["All people of the state","Only voters","President","Cities"], correct: "All people of the state" },
  { question: "Why do states have different numbers of Representatives?", answers: ["Population","Size","Money","Location"], correct: "Population" },
  { question: "We elect a President for how many years?", answers: ["4","2","6","8"], correct: "4" },

  { question: "In what month do we vote for President?", answers: ["November","January","July","March"], correct: "November" },
  { question: "If the President cannot serve, who becomes President?", answers: ["Vice President","Speaker","Chief Justice","Governor"], correct: "Vice President" },
  { question: "Who is Commander in Chief?", answers: ["President","General","Congress","Governor"], correct: "President" },
  { question: "Who signs bills into law?", answers: ["President","Congress","Court","Governor"], correct: "President" },
  { question: "Who vetoes bills?", answers: ["President","Congress","Court","Governor"], correct: "President" },

  { question: "What does the Cabinet do?", answers: ["Advises the President","Makes laws","Runs courts","Votes"], correct: "Advises the President" },
  { question: "What does the judicial branch do?", answers: ["Reviews laws","Writes laws","Commands military","Collects taxes"], correct: "Reviews laws" },
  { question: "What is the highest court?", answers: ["Supreme Court","District Court","Federal Court","State Court"], correct: "Supreme Court" },
  { question: "How many justices are there?", answers: ["9","7","10","12"], correct: "9" },
  { question: "What is one power of the federal government?", answers: ["Print money","Issue licenses","Run schools","Build roads"], correct: "Print money" },

  { question: "What is one power of the states?", answers: ["Provide education","Print money","Declare war","Make treaties"], correct: "Provide education" },
  { question: "What are the two major political parties?", answers: ["Democratic and Republican","Green and Libertarian","Federal and State","Left and Right"], correct: "Democratic and Republican" },
  { question: "What is one responsibility only for citizens?", answers: ["Serve on a jury","Pay taxes","Obey laws","Work"], correct: "Serve on a jury" },
  { question: "What is one right only for citizens?", answers: ["Vote","Drive","Work","Travel"], correct: "Vote" },
  { question: "What do we show loyalty to?", answers: ["United States","President","Party","State"], correct: "United States" },

  { question: "What is one promise of citizens?", answers: ["Be loyal to U.S.","Pay rent","Vote always","Work"], correct: "Be loyal to U.S." },
  { question: "How old must citizens be to vote?", answers: ["18","16","21","25"], correct: "18" },
  { question: "When is tax day?", answers: ["April 15","Jan 1","July 4","Nov 1"], correct: "April 15" },
  { question: "Who lived in America first?", answers: ["American Indians","Europeans","Africans","Asians"], correct: "American Indians" },
  { question: "Who wrote the Declaration of Independence?", answers: ["Thomas Jefferson","Washington","Lincoln","Franklin"], correct: "Thomas Jefferson" },

  { question: "When was Independence declared?", answers: ["July 4, 1776","1787","1800","1865"], correct: "July 4, 1776" },
  { question: "Who was the first President?", answers: ["George Washington","Lincoln","Adams","Jefferson"], correct: "George Washington" },
  { question: "What territory was bought in 1803?", answers: ["Louisiana","Texas","Alaska","Hawaii"], correct: "Louisiana" },
  { question: "What war was between North and South?", answers: ["Civil War","WWI","WWII","Cold War"], correct: "Civil War" },
  { question: "Who freed the slaves?", answers: ["Lincoln","Washington","Jefferson","Roosevelt"], correct: "Lincoln" },

  { question: "What did Martin Luther King Jr. do?", answers: ["Fought civil rights","Wrote Constitution","Was President","Started war"], correct: "Fought civil rights" },
  { question: "What ocean is on West Coast?", answers: ["Pacific","Atlantic","Indian","Arctic"], correct: "Pacific" },
  { question: "What ocean is on East Coast?", answers: ["Atlantic","Pacific","Indian","Arctic"], correct: "Atlantic" },
  { question: "What is capital of U.S.?", answers: ["Washington, D.C.","New York","Boston","Chicago"], correct: "Washington, D.C." },
  { question: "Where is Statue of Liberty?", answers: ["New York","California","Texas","Florida"], correct: "New York" },

  // To complete 128, continue pattern (expanded topics: geography, amendments, rights, wars, leaders, civic duties)
  { question: "What is the largest state?", answers: ["Alaska","Texas","California","Montana"], correct: "Alaska" },
  { question: "What is the smallest state?", answers: ["Rhode Island","Delaware","Connecticut","Vermont"], correct: "Rhode Island" },
  { question: "What is the capital of your state?", answers: ["Varies by state"], correct: "Varies by state" },
  { question: "Name one U.S. territory.", answers: ["Puerto Rico","Guam","U.S. Virgin Islands","American Samoa"], correct: "Puerto Rico" },
  { question: "Name one state that borders Canada.", answers: ["Maine","New York","Michigan","Washington"], correct: "Maine" }, 

  {question: "Name one state that borders Mexico.", answers: ["California","Arizona","New Mexico","Texas"], correct: "California" },
  { question: "What is the capital of the United States?", answers: ["Washington, D.C.","New York","Los Angeles","Chicago"], correct: "Washington, D.C." },
  { question: "Where is the Statue of Liberty?", answers: ["New York","Florida","California","Texas"], correct: "New York" },
  { question: "Why does the flag have 13 stripes?", answers: ["Because there were 13 original colonies","Because it looks nice","Because of the 13 amendments","Because of the 13 states"], correct: "Because there were 13 original colonies" },
  { question: "Why does the flag have 50 stars?", answers: ["Because there are 50 states","Because it looks nice","Because of the 50 amendments","Because of the 50 colonies"], correct: "Because there are 50 states" },
  { question: "What is the name of the national anthem?", answers: ["The Star-Spangled Banner","America the Beautiful","God Bless America","My Country 'Tis of Thee"], correct: "The Star-Spangled Banner" }, 

  { question: "When do we celebrate Independence Day?", answers: ["July 4","January 1","December 25","November 11"], correct: "July 4" },
  { question: "Name two national U.S. holidays.", answers: ["New Year's Day and Independence Day","Christmas and Halloween","Easter and Thanksgiving","Valentine's Day and Labor Day"], correct: "New Year's Day and Independence Day" },

  { question: "What is the name of the Speaker of the House of representative now?", answers: ["Kevin McCarthy","Nancy Pelosi","Chuck Schumer","Mike Johnson"], correct: "Mike Johnson" },
  { question: "Who is the Chief Justice of the United States now?", answers: ["Johnm G. Roberts, Jr","Clarence Thomas","Ruth Bader Ginsburg","Sonia Sotomayor"], correct: "John G. Roberts Jr" },
  { question: "Who is the President of the United States now?", answers: ["Joe Biden","Donald Trump","Barack Obama","George W. Bush"], correct: "Donal Trump" },

  { question: "Who is the Vice President of the United States now?", answers: ["Kamala Harris","J D VANCE","Mike Pence","Nancy Pelosi"], correct: "J D VANCE" },

  { question: "Who is the Governor of your state now?", answers: ["Varies by state"], correct: "Varies by state " }, 

  { question: "What is one responsibility of the President?", answers: ["Commander in Chief","Make laws","Run courts","Collect taxes"], correct: "Commander in Chief" },
  { question: "What is one power of the President?", answers: ["Veto laws","Print money","Declare war","Make treaties"], correct: "Veto laws" },
  { question: "What is one responsibility of Congress?", answers: ["Make laws","Run the military","Print money","Enforce laws"], correct: "Make laws" },
  { question: "What is one power of Congress?", answers: ["Declare war","Veto laws","Run courts","Collect taxes"], correct: "Declare war" },
  { question: "What is one responsibility of the Supreme Court?", answers: ["Review laws","Make laws","Enforce laws","Collect taxes"], correct: "Review laws" },

  { question: "What is one power of the Supreme Court?", answers: ["Declare laws unconstitutional","Make laws","Enforce laws","Collect taxes"], correct: "Declare laws unconstitutional" },
  { question: "What is one responsibility of the states?", answers: ["Provide education","Print money","Declare war","Make treaties"], correct: "Provide education" },
  { question: "What is one power of the states?", answers: ["Provide education","Print money","Declare war","Make treaties"], correct: "Provide education" },
  { question: "Who is the Governor of your state now?", answers: ["Varies by state"], correct: "Varies by state" },
  { question: "What is the capital of your state?", answers: ["Varies by state"], correct: "Varies by state" },
  { question: "What are the two major political parties in the United States?", answers: ["Democratic and Republican","Green and Libertarian","Federal and State","Left and Right"], correct: "Democratic and Republican" },
  { question: "What is one reason colonists came to America?", answers: ["Freedom","Economic opportunity","Religious freedom","Escape persecution"], correct: "Freedom" },
  { question: "Who lived in America before the Europeans arrived?", answers: ["American Indians","Africans","Asians","Europeans"], correct: "American Indians" },
  { question: "What group of people was taken to America and sold as slaves?", answers: ["Africans","European settlers","Native Americans","Asians"], correct: "Africans" },
  { question: "Why did the colonists fight the British?", answers: ["Because of high taxes (taxation without representation)","Because they wanted independence","Because of British soldiers in their homes","All of the above"], correct: "All of the above" },

  { question: "Who wrote the Declaration of Independence?", answers: ["Thomas Jefferson","George Washington","Abraham Lincoln","Benjamin Franklin"], correct: "Thomas Jefferson" },
  { question: "When was the Declaration of Independence adopted?", answers: ["July 4, 1776","January 1, 1776","December 25, 1776","November 11, 1776"], correct: "July 4, 1776" },

  { question: "There were 13 original states. Name three.", answers: ["New Hampshire, Massachusetts, Rhode Island","Virginia, New York, Pennsylvania","North Carolina, South Carolina, Georgia","All of the above"], correct: "All of the above" },

  { question: "What happened at the Constitutional Convention?", answers: ["The Constitution was written","The Declaration of Independence was signed","The Bill of Rights was added","The Civil War started"], correct: "The Constitution was written" },
  { question: "When was the Constitution written?", answers: ["1787","1776","1800","1865"], correct: "1787" },
  { question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.", answers: ["James Madison","Alexander Hamilton","John Jay","All of the above"], correct: "All of the above" },

  { question: "What is one thing Benjamin Franklin is famous for?", answers: ["U.S. diplomat","Oldest member of Constitutional Convention","First Postmaster General","All of the above"], correct: "All of the above" },

  { question: "Who is the 'Father of Our Country'?", answers: ["George Washington","Thomas Jefferson","Abraham Lincoln","Benjamin Franklin"], correct: "George Washington" },
  { question: "Who was the first President?", answers: ["George Washington","John Adams","Thomas Jefferson","Abraham Lincoln"], correct: "George Washington" },
  { question: "What territory did the United States buy from France in 1803?", answers: ["Louisiana","Texas","Alaska","Hawaii"], correct: "Louisiana" },
  { question: "Name one war fought by the United States in the 1800s.", answers: ["War of 1812","Mexican-American War","Civil War","All of the above"], correct: "All of the above" },
  { question: "Name the U.S. war between the North and the South.", answers: ["Civil War","World War I","World War II","Cold War"], correct: "Civil War" },
  { question: "What was one important thing that Abraham Lincoln did?", answers: ["Freed the slaves (Emancipation Proclamation)","Led the United States during the Civil War","Saved the Union","All of the above"], correct: "All of the above" },
  { question: "What did Martin Luther King Jr. do?", answers: ["Fought for civil rights","Was a U.S. President","Invented the light bulb","Wrote the Declaration of Independence"], correct: "Fought for civil rights" },
  { question: "What major event happened on September 11, 2001, in the United States?", answers: ["Terrorist attacks","Earthquake","Hurricane","Stock market crash"], correct: "Terror"}, 
  
];

// (Your quiz logic stays the same)


let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const progressEl = document.getElementById("progress");
const resultsEl = document.getElementById("results");
const quizEl = document.getElementById("quiz");

function showQuestion() {
  feedbackEl.textContent = "";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";

  let q = questions[current];
  questionEl.textContent = q.question;
  scoreEl.textContent = "Score: " + score;
  progressEl.textContent = `Question ${current + 1} of ${questions.length}`;

  q.answers.forEach(answer => {
    let btn = document.createElement("button");
    btn.textContent = answer;

    btn.onclick = () => {
      if (answer === q.correct) {
        btn.classList.add("correct");
        feedbackEl.textContent = "Correct!";
        score++;
      } else {
        btn.classList.add("incorrect");
        feedbackEl.textContent = "Wrong! Correct: " + q.correct;
      }

      Array.from(answersEl.children).forEach(b => b.disabled = true);
      nextBtn.style.display = "block";
    };

    answersEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    quizEl.style.display = "none";
    resultsEl.style.display = "block";
    document.getElementById("finalScore").textContent =
      `Final Score: ${score}/${questions.length}`;
  }
};

document.getElementById("restartBtn").onclick = () => {
  current = 0;
  score = 0;
  resultsEl.style.display = "none";
  quizEl.style.display = "block";
  showQuestion();
};

showQuestion();