import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../option/Option";

import Quiz from "../quiz/Quiz";
import DA1quiz from "../deutsch/DA1quiz";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(`Hello. What do you want to learn`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1,
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "DA1Quiz",
      widgetFunc: (props) => <DA1quiz {...props} />,
      props: {

       questions: [
          {
            question: "Willcommen beim Ziman Bot",
            id: 1,
          },
          {
            question: "Drücken Sie nächst, um zu anfangen, اكبس التالي لبدء التعلم",
            answer: "Gutn Morgen User, alles gut bei dir?",
            id: 2,
          },
          {
            question: "Guten Morgen",
            answer: "تعني صباح الخير",
            id: 3,
          },
          {
            question: "Alles gut bei dir?",
            answer: "هل كل شيء على مايرام؟",
            id: 4,
          }
          ,
          {
            question: "Ja, alles gut und bei dir?",
            answer: "نعم,كل شيء بخير وانت؟",
            id: 5,
          }
        ]









      }
    },
  ],
};

export default config;
