// Enhanced L'Oréal System Prompt and Conversation Engine
const LOREAL_SYSTEM_PROMPT = `You are an expert L'Oréal beauty advisor with extensive knowledge of all L'Oréal products, beauty techniques, and routines. 

STRICT GUIDELINES:
- ONLY discuss L'Oréal products, beauty advice, skincare routines, makeup techniques, and haircare
- For ANY non-beauty topics, politely redirect: "I'm here specifically to help with L'Oréal beauty products and advice. Let's talk about how I can enhance your beauty routine!"
- Be enthusiastic, knowledgeable, and helpful
- Ask follow-up questions to provide personalized recommendations
- Mention specific L'Oréal product names and benefits
- Keep responses conversational and engaging

TOPICS I CAN HELP WITH:
✅ L'Oréal makeup, skincare, haircare, fragrance
✅ Beauty routines and application tips  
✅ Product recommendations based on skin/hair type
✅ Color matching and shade selection
✅ Ingredient benefits and product comparisons

TOPICS I CANNOT HELP WITH:
❌ Weather, sports, politics, general conversation
❌ Other beauty brands (redirect to L'Oréal alternatives)
❌ Medical advice or skin condition diagnosis
❌ Anything unrelated to L'Oréal beauty`;

// Conversation context tracking
let conversationContext = {
  lastTopic: null,
  userPreferences: {},
  questionCount: 0
};

// Multiple response variations for dynamic conversations
const responseBank = {
  foundation: [
    "L'Oréal's True Match Foundation is perfect for you! With 45 shades, it adapts to your skin tone beautifully. What's your skin type - oily, dry, or combination?",
    "I love recommending our Infallible Pro-Matte Foundation for long-lasting coverage! Are you looking for light, medium, or full coverage?",
    "Have you tried L'Oréal's Magic Nude Liquid Powder? It's amazing for a natural, breathable finish. What occasions are you planning to wear it for?"
  ],
  
  skincare: [
    "L'Oréal skincare is fantastic! Our Revitalift line is perfect for anti-aging, while Hydra Genius provides incredible hydration. What are your main skin concerns?",
    "I'm excited to help with your skincare routine! Are you interested in anti-aging products, hydration, or brightening? L'Oréal has amazing options for each!",
    "Let's create the perfect L'Oréal skincare routine for you! Tell me about your current concerns - fine lines, dryness, dullness, or uneven tone?"
  ],
  
  hair: [
    "L'Oréal Elvive has the perfect solution for your hair! Our Total Repair 5 works wonders for damaged hair, while Color Vibrancy protects color-treated hair. What's your hair type?",
    "I love helping with hair transformations! Are you looking for repair, volume, color protection, or hydration? L'Oréal Excellence and Elvive have amazing options!",
    "Hair care is so important! L'Oréal's Advanced Haircare line offers everything from sulfate-free cleansing to intense conditioning. What's your biggest hair challenge?"
  ],
  
  mascara: [
    "L'Oréal mascaras are incredible! Voluminous Lash Paradise gives amazing volume and length, while Telescopic creates precise definition. Do you prefer dramatic or natural looks?",
    "Our mascaras are bestsellers for a reason! Are you looking for waterproof, lengthening, or volumizing? L'Oréal has the perfect formula for every need!",
    "Mascara can transform your entire look! L'Oréal's Carbon Black formula is perfect for intense color. Do you prefer curved or straight wands?"
  ],
  
  lipstick: [
    "L'Oréal lipsticks are amazing! Rouge Signature offers liquid matte perfection, while Color Riche provides creamy luxury. What's your favorite lipstick finish?",
    "I'm excited to help you find your perfect shade! Are you drawn to bold reds, subtle nudes, or vibrant pinks? L'Oréal has over 100 stunning shades!",
    "Lip color is so personal! Do you prefer long-wearing liquid lipsticks or moisturizing bullets? L'Oréal's formulas are designed for every preference!"
  ],

  redirect: [
    "I'm here specifically to help with L'Oréal beauty products and advice! Let's talk about how I can enhance your beauty routine today. Are you interested in makeup, skincare, or haircare? 💄✨",
    "I'd love to focus on L'Oréal beauty topics! Whether you need makeup tips, skincare advice, or haircare solutions, I'm here to help. What beauty goals are you working on? 🌟",
    "Let's keep our conversation focused on L'Oréal beauty! I'm passionate about helping you discover the perfect products for your routine. What would you like to explore first? ✨"
  ]
};

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
    
    // Enhanced L'Oréal responses with conversation tracking
    let response = generateLorealResponse(userMessage);
    displayMessage(response, "bot");
  }, 1500);
});

// Enhanced L'Oréal response generator with conversation tracking
function generateLorealResponse(userMessage) {
  const message = userMessage.toLowerCase();
  conversationContext.questionCount++;
  
  // Detect topic and generate varied responses
  let responses;
  let detectedTopic = null;
  
  // Foundation/Makeup detection
  if (message.includes("foundation") || message.includes("base") || message.includes("coverage")) {
    responses = responseBank.foundation;
    detectedTopic = "foundation";
  }
  // General makeup
  else if (message.includes("makeup") || message.includes("cosmetic")) {
    responses = [
      "L'Oréal makeup is my specialty! Are you looking for everyday looks or something more glamorous? We have everything from foundations to bold lipsticks!",
      "I love helping create beautiful makeup looks! What's your skill level - beginner, intermediate, or makeup pro? L'Oréal has products perfect for everyone!",
      "Makeup is such an art! Are you interested in complexion products, eye makeup, or lip colors? L'Oréal's range is absolutely incredible!"
    ];
    detectedTopic = "makeup";
  }
  // Skincare detection
  else if (message.includes("skincare") || message.includes("face") || message.includes("skin") || 
           message.includes("moisturizer") || message.includes("serum") || message.includes("cream")) {
    responses = responseBank.skincare;
    detectedTopic = "skincare";
  }
  // Hair detection
  else if (message.includes("hair") || message.includes("shampoo") || message.includes("conditioner") || 
           message.includes("elvive") || message.includes("damaged")) {
    responses = responseBank.hair;
    detectedTopic = "hair";
  }
  // Eye makeup detection
  else if (message.includes("mascara") || message.includes("eyes") || message.includes("lashes") || 
           message.includes("eyeshadow") || message.includes("liner")) {
    responses = responseBank.mascara;
    detectedTopic = "eyes";
  }
  // Lip products detection
  else if (message.includes("lipstick") || message.includes("lips") || message.includes("gloss") || 
           message.includes("rouge") || message.includes("lip")) {
    responses = responseBank.lipstick;
    detectedTopic = "lips";
  }
  // Color/shade requests
  else if (message.includes("color") || message.includes("shade") || message.includes("match")) {
    responses = [
      "Color matching is so important! L'Oréal's True Match technology helps find your perfect shade. Are you looking for foundation, lipstick, or hair color matching?",
      "I love helping with color selection! L'Oréal offers hundreds of shades across all products. What specific item are you trying to match?",
      "Finding the right shade makes all the difference! Are you shopping for complexion, lips, or hair color? L'Oréal's range is incredibly inclusive!"
    ];
    detectedTopic = "color";
  }
  // Routine/application questions
  else if (message.includes("routine") || message.includes("steps") || message.includes("apply") || 
           message.includes("use") || message.includes("tips")) {
    responses = [
      "I'd love to help create your perfect beauty routine! Are you looking for a morning skincare routine, evening makeup routine, or hair care regimen?",
      "Beauty routines are so personal! What's your current routine like, and what would you like to improve? L'Oréal has products for every step!",
      "Application tips can make such a difference! Are you looking for skincare application, makeup techniques, or hair styling advice with L'Oréal products?"
    ];
    detectedTopic = "routine";
  }
  // Price/where to buy questions
  else if (message.includes("price") || message.includes("cost") || message.includes("buy") || 
           message.includes("store") || message.includes("where")) {
    responses = [
      "L'Oréal products are available at most drugstores, Target, Walmart, and online! For specific pricing, I'd recommend checking your preferred retailer. What product were you interested in?",
      "You can find L'Oréal products almost everywhere - pharmacies, department stores, and online! Which specific product are you looking to purchase?",
      "L'Oréal is widely available and affordable! Most products range from drugstore to mid-range pricing. What were you hoping to try?"
    ];
    detectedTopic = "shopping";
  }
  // Greetings and general beauty interest
  else if (message.includes("hello") || message.includes("hi") || message.includes("help") || 
           message.includes("beauty") || message.includes("loreal")) {
    responses = [
      "Hello! I'm so excited to help you with L'Oréal beauty! Are you looking for makeup recommendations, skincare advice, or hair care solutions today?",
      "Hi there! Welcome to L'Oréal beauty consultation! What brings you here today - are you trying to solve a specific beauty challenge or explore new products?",
      "Hello! I'm your personal L'Oréal beauty advisor! Whether you're a beauty beginner or expert, I'm here to help. What would you like to discover today?"
    ];
    detectedTopic = "greeting";
  }
  // Off-topic detection and polite redirection
  else if (isOffTopic(message)) {
    responses = responseBank.redirect;
    detectedTopic = "redirect";
  }
  // Default L'Oréal response for unclear beauty questions
  else {
    responses = [
      "I'd love to help you with L'Oréal beauty! Could you tell me more about what you're looking for? Are you interested in makeup, skincare, haircare, or something specific?",
      "That's interesting! How can I help you with L'Oréal products specifically? I'm here to assist with makeup, skincare, haircare, and beauty routines!",
      "I want to give you the best L'Oréal recommendations! Could you be more specific about what beauty area you'd like help with today?"
    ];
    detectedTopic = "general";
  }
  
  // Update conversation context
  conversationContext.lastTopic = detectedTopic;
  
  // Return varied response
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

// Function to detect off-topic conversations
function isOffTopic(message) {
  const offTopicKeywords = [
    "weather", "sports", "politics", "food", "music", "movies", "work", "school",
    "travel", "technology", "games", "news", "health", "medicine", "doctor",
    "recipe", "cooking", "restaurant", "car", "house", "money", "investment",
    "shopping" // except beauty shopping
  ];
  
  const beautyKeywords = [
    "beauty", "makeup", "skin", "hair", "cosmetic", "loreal", "foundation",
    "lipstick", "mascara", "skincare", "routine", "product", "shade", "color"
  ];
  
  // Check if message contains off-topic keywords but no beauty keywords
  const hasOffTopicKeywords = offTopicKeywords.some(keyword => message.includes(keyword));
  const hasBeautyKeywords = beautyKeywords.some(keyword => message.includes(keyword));
  
  return hasOffTopicKeywords && !hasBeautyKeywords;
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
