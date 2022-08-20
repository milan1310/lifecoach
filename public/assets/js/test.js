const testData = [
  {
    question: [
      {
        id: 1.1,
        options: "I've been romantic and imaginative",
        name: 1,
      },
      {
        id: 1.2,
        options: "I've been pragmatic and down to earth",
        name: 1,
      },
    ],
  },
  {
    question: [
      {
        id: 2.1,
        options: "I have tended to take on confrontations",
        name: 2,
      },
      {
        id: 2.2,
        options: "I have tended to avoid confrontations",
        name: 2,
      },
    ],
  },
  {
    question: [
      {
        id: 3.1,
        options: "I have typically been diplomatic, charming and ambitious",
        name: 3,
      },
      {
        id: 3.2,
        options: "I have typically been direct, formal and idealistic",
        name: 3,
      },
    ],
  },
  {
    question: [
      {
        id: 4.1,
        options: "I have tended to be focused and intense",
        name: 4,
      },
      {
        id: 4.2,
        options: "I have tended to be spontaneous and fun-loving",
        name: 4,
      },
    ],
  },
  {
    question: [
      {
        id: 5.1,
        options:
          "I have been a hospitable person and have enjoyed welcoming others into my life",
        name: 5,
      },
      {
        id: 5.2,
        options:
          "I have been a private person and have not mixed much with others",
        name: 5,
      },
    ],
  },
  {
    question: [
      {
        id: 6.1,
        options: "Generally, it's been easy to provoke me",
        name: 6,
      },
      {
        id: 6.2,
        options: "Generally, it's been difficult to provoke me",
        name: 6,
      },
    ],
  },
  {
    question: [
      {
        id: 7.1,
        options: "I've been more of a 'street-smart' survivor",
        name: 7,
      },
      {
        id: 7.2,
        options: "I've been more of a 'high-minded' idealist",
        name: 7,
      },
    ],
  },
  {
    question: [
      {
        id: 8.1,
        options: "I have preferred to maintain distance with people",
        name: 8,
      },
      {
        id: 8.2,
        options: "I have needed to show affection to people",
        name: 8,
      },
    ],
  },
  {
    question: [
      {
        id: 9.1,
        options:
          "When presented with a new experience, I've usually asked myself if it would be enjoyable ",
        name: 9,
      },
      {
        id: 9.2,
        options:
          "When presented with a new experience, I've usually asked myself if it would be useful to me",
        name: 9,
      },
    ],
  },
  {
    question: [
      {
        id: 10.1,
        options: "I have tended to focus too much on others",
        name: 10,
      },
      {
        id: 10.2,
        options: "I have tended to focus too much on myself",
        name: 10,
      },
    ],
  },
  {
    question: [
      {
        id: 11.1,
        options: "Others have depended on my strength and decisiveness",
        name: 11,
      },
      {
        id: 11.2,
        options: "Others have depended on my insight and knowledge",
        name: 11,
      },
    ],
  },
  {
    question: [
      {
        id: 12.1,
        options: "I have come across as being too unsure of myself",
        name: 12,
      },
      {
        id: 12.2,
        options: "I have come across as being too sure of myself",
        name: 12,
      },
    ],
  },
  {
    question: [
      {
        id: 13.1,
        options: "I have been more relationship-oriented than goal-oriented",
        name: 13,
      },
      {
        id: 13.2,
        options: "I have been more goal-oriented than relationship-oriented",
        name: 13,
      },
    ],
  },
  {
    question: [
      {
        id: 14.1,
        options: "I have not been able to speak up for myself very well",
        name: 14,
      },
      {
        id: 14.2,
        options:
          "I have been outspoken, I've said what others wish they had the nerve to say",
        name: 14,
      },
    ],
  },
  {
    question: [
      {
        id: 15.1,
        options:
          "It's been difficult for me to stop considering alternatives and do something definite",
        name: 15,
      },
      {
        id: 15.2,
        options: "It's been difficult for me to take it easy and be flexible",
        name: 15,
      },
    ],
  },
  {
    question: [
      {
        id: 16.1,
        options: "I have tended to be careful and hesitant",
        name: 16,
      },
      {
        id: 16.2,
        options: "I have tended to be bold and domineering",
        name: 16,
      },
    ],
  },
  {
    question: [
      {
        id: 17.1,
        options:
          "My reluctance to get too involved has gotten me in trouble with people",
        name: 17,
      },
      {
        id: 17.2,
        options:
          "My eagerness to have people depend on me has gotten me in trouble with them",
        name: 17,
      },
    ],
  },
  {
    question: [
      {
        id: 18.1,
        options:
          "Usually, I have been able to put my feelings aside to get the job done",
        name: 18,
      },
      {
        id: 18.2,
        options:
          "Usually, I have needed to work through my feelings before I act out",
        name: 18,
      },
    ],
  },
  {
    question: [
      {
        id: 19.1,
        options: "Generally, I have been methodical and cautious",
        name: 19,
      },
      {
        id: 19.2,
        options: "Generally, I have been adventurous and take risks",
        name: 19,
      },
    ],
  },
  {
    question: [
      {
        id: 20.1,
        options:
          "I have tended to be a supportive, giving person who seeks intimacy with others",
        name: 20,
      },
      {
        id: 20.2,
        options:
          "I have tended to be a serious, reserved person who likes discussing issues",
        name: 20,
      },
    ],
  },
  {
    question: [
      {
        id: 21.1,
        options: "I've often felt the need to be a 'pillar of strength'",
        name: 21,
      },
      {
        id: 21.2,
        options: "I've often felt the need to perform perfectly",
        name: 21,
      },
    ],
  },
  {
    question: [
      {
        id: 22.1,
        options:
          "I've typically been interested in asking the tough questions and maintaining my space",
        name: 22,
      },
      {
        id: 22.2,
        options:
          "I've typically been interested in maintaining my stability and peace of mind",
        name: 22,
      },
    ],
  },
  {
    question: [
      {
        id: 23.1,
        options: "I've been a bit cynical and skeptical",
        name: 23,
      },
      {
        id: 23.2,
        options: "I've been a bit mushy and sentimental",
        name: 23,
      },
    ],
  },
  {
    question: [
      {
        id: 24.1,
        options: "I've often worried that I'm missing out on something better",
        name: 24,
      },
      {
        id: 24.2,
        options:
          "I've often worried that if I let my guard down, someone will take advantage of me",
        name: 24,
      },
    ],
  },
  {
    question: [
      {
        id: 25.1,
        options: "My habit of being 'stand-offish' has annoyed people",
        name: 25,
      },
      {
        id: 25.2,
        options: "My habit of telling people what to do has annoyed people",
        name: 25,
      },
    ],
  },
  {
    question: [
      {
        id: 26.1,
        options:
          "Usually, when troubles havegotten to me, I have been able to 'tune them out.'",
        name: 26,
      },
      {
        id: 26.2,
        options:
          "Usually, when troubles have gotten to me, I have treated myself to something I've emjoyed",
        name: 26,
      },
    ],
  },
  {
    question: [
      {
        id: 27.1,
        options:
          "I have depended on my friends and they know that they can depend on me",
        name: 27,
      },
      {
        id: 27.2,
        options: "I have not depended on people, I have done things on my own",
        name: 27,
      },
    ],
  },
  {
    question: [
      {
        id: 28.1,
        options: "I have tended to be detached and preoccupied",
        name: 28,
      },
      {
        id: 28.2,
        options: "I have tended to be moody and self-absorbed.",
        name: 28,
      },
    ],
  },
  {
    question: [
      {
        id: 29.1,
        options: "I have liked to challenge people and 'shake them up'",
        name: 29,
      },
      {
        id: 29.2,
        options: "I have liked to comfort people and calm them down",
        name: 29,
      },
    ],
  },
  {
    question: [
      {
        id: 30.1,
        options: "I have generally been an outgoing, sociable person",
        name: 30,
      },
      {
        id: 30.2,
        options: "I have generally been an earnest, self-disciplined person",
        name: 30,
      },
    ],
  },
  {
    question: [
      {
        id: 31.1,
        options:
          "I've wanted to 'fit in' with others - I get uncomfortable when I stand out too much",
        name: 31,
      },
      {
        id: 31.2,
        options:
          "I've wanted to stand out from others - I get uncomfortable when I don't distinguish myself",
        name: 31,
      },
    ],
  },
  {
    question: [
      {
        id: 32.1,
        options:
          "Pursuing my personal interests has been more important to me than having stability and security",
        name: 32,
      },
      {
        id: 32.2,
        options:
          "Having stability and security has been more important to me than pursuing my personal interests",
        name: 32,
      },
    ],
  },
  {
    question: [
      {
        id: 33.1,
        options: "When I've had conflicts with others, I've tended to withdraw",
        name: 33,
      },
      {
        id: 33.2,
        options: "When I've had conflicts with others, I've rarely backed down",
        name: 33,
      },
    ],
  },
  {
    question: [
      {
        id: 34.1,
        options: "I have given in too easily and let others push me around",
        name: 34,
      },
      {
        id: 34.2,
        options: "I have been too uncompromising and demanding with others",
        name: 34,
      },
    ],
  },
  {
    question: [
      {
        id: 35.1,
        options:
          "I've been appreciated for my unsinkable spirit and resourcefulness",
        name: 35,
      },
      {
        id: 35.2,
        options: "I've been appreciated for my deep caring and personal warmth",
        name: 35,
      },
    ],
  },
  {
    question: [
      {
        id: 36.1,
        options: "I have wanted to make a favorable impression on others",
        name: 36,
      },
      {
        id: 36.2,
        options:
          "I have cared little about making a favorable impression on others",
        name: 36,
      },
    ],
  },
];

const questionList = () => {
  const mailnList = document.querySelector("#questionlist");
  testData.forEach((data) => {
    const listEl = document.createElement("div");
    listEl.className = "row .g-2";
    listEl.innerHTML = `
        <div class="col-12 col-sm-1 text-center"><h2 class="p-2">${data.question[0].name}</h2></div>
          <div class="col-12 p-2 col-sm-5">
            <div class="questio-box p-2">
              <input type="radio" class="form-check-input radio" name="${data.question[0].name}" id="${data.question[0].id}" value="${data.question[0].options}" required>
              <label for="${data.question[0].id}" class="fs-3">${data.question[0].options}</label>
            </div>
          </div>
          <div class="col-12 p-2 col-sm-5">
            <div class="questio-box p-2">
              <input type="radio" class="form-check-input radio" name="${data.question[1].name}" id="${data.question[1].id}" value="${data.question[1].options}" required>
              <label for="${data.question[1].id}" class="fs-3">${data.question[1].options}</label>
            </div>
          </div> 
        `;
    mailnList.append(listEl);
  });
};
questionList();

let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.querySelector(".btn-test");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function display() {
  testData.forEach((data) => {
    var checkRadio = document.querySelector(
      `input[name="${data.question[0].name}"]:checked`
    );

    if (checkRadio != null) {
      // When the user clicks the button, open the modal
      btn.addEventListener("click", function () {
        modal.style.display = "block";
      });
    }
  });
}

document.querySelector(".btn-test").addEventListener("click", display);
