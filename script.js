// 1-Question.
const question_1 = new Map();
const question_2 = new Map();
const question_3 = new Map();


let a = 0;
let b = 0;


question_1.set("question", "qaysi son yoqmaydi ? ")
question_1.set(1, "1");
question_1.set(2, "48");
question_1.set(3, "3");
question_1.set(4, "5");
question_1.set("correct",1)
question_1.set(true, "true");
question_1.set(false, "false");

const Question_1 = function(){
    let answer = +prompt(`
        ${question_1.get("question")}
        1) ${question_1.get(1)}
        2) ${question_1.get(2)}
        3) ${question_1.get(3)}
        4) ${question_1.get(4)}
    `)
    if(answer === question_1.get("correct")){
        alert(`${question_1.get(true)}`)
        a++;
    }
    else{
        alert(`${question_1.get(false)}`)
        b++;
    }
}
Question_1();

// 2-Question.

question_2.set("question", "Qaysi ism yoqadi ? ")
question_2.set(1, "Muhammadali");
question_2.set(2, "Usmon");
question_2.set(3, "Umar");
question_2.set(4, "Mustafo");
question_2.set("correct",1)
question_2.set(true, "true");
question_2.set(false, "false");

const Question_2 = function(){
    let answer = +prompt(`
        ${question_2.get("question")}
        1) ${question_2.get(1)}
        2) ${question_2.get(2)}
        3) ${question_2.get(3)}
        4) ${question_2.get(4)}
    `)
    if(answer === question_2.get("correct")){
        alert(`${question_2.get(true)}`)
        a++;
    }
    else{
        alert(`${question_2.get(false)}`)
        b++;
    }
}
Question_2();

// 3-Question.

question_3.set("question", "Men gapirayotgan gaplarimga loyiqmanmi ? ")
question_3.set(1, "Ha loyiqman");
question_3.set(2, "Yoq loyiq bo`lmasam kerak ");
question_3.set(3, "Buning javobini men bilmayman ");
question_3.set("correct",3)
question_3.set(true, "true");
question_3.set(false, "false");

const Question_3 = function(){
    let answer = +prompt(`
        ${question_3.get("question")}
        1) ${question_3.get(1)}
        2) ${question_3.get(2)}
        3) ${question_3.get(3)}
    `)
    if(answer === question_3.get("correct")){
        alert(`${question_3.get(true)}`)
        a++;
    }
    else{
        alert(`${question_3.get(false)}`)
        b++;
    }
}
Question_3();



//  console emits.

alert(`
  number of correct answers - ${a}
  number of incorrect answers - ${b}
`)