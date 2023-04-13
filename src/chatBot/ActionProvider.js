class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend. what do you want?");
    this.addMessageToState(message);
  };
  omar = () => {
    const message = this.createChatBotMessage("Omar is at home");
    this.addMessageToState(message);
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Fantastic. Here is your quiz. Good luck!",
      {
        widget: "javascriptQuiz",
      }
    );
  

    this.addMessageToState(message);
  };
  handleA1 = () => {
    const message = this.createChatBotMessage(
      "",
      {
        widget: "DA1Quiz",
      }
    );
    this.addMessageToState(message);
  }

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
