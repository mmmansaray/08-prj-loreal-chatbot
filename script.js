// L'Oréal System Prompt (inline for simplicity)
const LOREAL_SYSTEM_PROMPT_COMPACT = `You are a L'Oréal beauty advisor. Only answer questions about L'Oréal products, beauty routines, and recommendations. For off-topic questions, redirect to L'Oréal beauty topics. Be helpful, knowledgeable, and enthusiastic about L'Oréal products and beauty advice.`;

/* DOM elements */
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatWindow = document.getElementById("chatWindow");

// Set initial message with L'Oréal branding
chatWindow.innerHTML = '<div class="message bot-message">👋 Hello! I\'m your L\'Oréal beauty advisor. How can I help you with your beauty routine today?</div>';

/* Handle form submit */
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  // Display user message
  displayMessage(userMessage, "user");

  // Clear input
  userInput.value = "";

  // Show typing indicator
  showTypingIndicator();

  // Simulate L'Oréal beauty advisor response
  setTimeout(() => {
    hideTypingIndicator();
    
    // Simple L'Oréal responses based on keywords
    let response = generateLorealResponse(userMessage);
    displayMessage(response, "bot");
  }, 1500);
});

// Generate L'Oréal-focused responses
function generateLorealResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // L'Oréal product recommendations
  if (message.includes("foundation") || message.includes("makeup")) {
    return "I'd recommend L'Oréal's True Match Foundation! It comes in 45 shades and provides natural, buildable coverage. What's your skin tone and type?";
  }
  
  if (message.includes("skincare") || message.includes("face") || message.includes("skin")) {
    return "L'Oréal has amazing skincare! Try our Revitalift line for anti-aging, or Hydra Genius for hydration. What are your main skin concerns?";
  }
  
  if (message.includes("hair") || message.includes("shampoo")) {
    return "L'Oréal Elvive has the perfect hair care for you! Try our Total Repair 5 for damaged hair, or Color Vibrancy for color-treated hair. What's your hair type?";
  }
  
  if (message.includes("mascara") || message.includes("eyes")) {
    return "L'Oréal's Voluminous Lash Paradise Mascara is a bestseller! It gives incredible volume and length. Perfect for any eye look!";
  }
  
  if (message.includes("lipstick") || message.includes("lips")) {
    return "Try L'Oréal's Rouge Signature or Color Riche lipsticks! We have hundreds of shades from bold reds to nude pinks. What's your preferred finish?";
  }
  
  // Off-topic redirect
  if (!message.includes("loreal") && !message.includes("beauty") && !message.includes("makeup") && 
      !message.includes("skin") && !message.includes("hair") && !message.includes("cosmetic")) {
    return "I'm here to help with L'Oréal products and beauty advice! How can I assist you with your beauty routine today? 💄✨";
  }
  
  // Default L'Oréal response
  return "I'd love to help you find the perfect L'Oréal products! Could you tell me more about what you're looking for - makeup, skincare, or haircare? 🌟";
}

// Helper function to display messages
function displayMessage(message, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}-message`;
  messageDiv.textContent = message;
  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Helper function to show typing indicator
function showTypingIndicator() {
  const typingDiv = document.createElement("div");
  typingDiv.className = "message bot-message typing";
  typingDiv.innerHTML = "L'Oréal advisor is typing...";
  typingDiv.id = "typing-indicator";
  chatWindow.appendChild(typingDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Helper function to hide typing indicator
function hideTypingIndicator() {
  const typingIndicator = document.getElementById("typing-indicator");
  if (typingIndicator) {
    typingIndicator.remove();
  }
}
