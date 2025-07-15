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
  questionCount: 0,
  lastMessage: null
};

/* DOM elements */
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatWindow = document.getElementById("chatWindow");

// Set initial message with L'Oréal branding
chatWindow.innerHTML =
  "<div class=\"message bot-message\">👋 Hello! I'm your L'Oréal beauty advisor. How can I help you with your beauty routine today?</div>";

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

    // Intelligent L'Oréal responses
    let response = generateLorealResponse(userMessage);
    displayMessage(response, "bot");
  }, 1500);
});

// Intelligent L'Oréal Beauty Advisor - Natural Conversation Engine
function generateLorealResponse(userMessage) {
  const message = userMessage.toLowerCase();
  conversationContext.questionCount++;
  
  // Store the original message for context
  conversationContext.lastMessage = userMessage;
  
  // Off-topic check first
  if (isOffTopic(message)) {
    const redirectResponses = [
      "I'm here specifically to help with L'Oréal beauty products and advice! Let's talk about how I can enhance your beauty routine today. Are you interested in makeup, skincare, or haircare? 💄✨",
      "I'd love to focus on L'Oréal beauty topics! Whether you need makeup tips, skincare advice, or haircare solutions, I'm here to help. What beauty goals are you working on? 🌟",
      "Let's keep our conversation focused on L'Oréal beauty! I'm passionate about helping you discover the perfect products for your routine. What would you like to explore first? ✨"
    ];
    return redirectResponses[Math.floor(Math.random() * redirectResponses.length)];
  }
  
  // INTELLIGENT BEAUTY CONVERSATION ENGINE
  // This section handles natural beauty conversations without rigid keyword matching
  
  // Greeting responses
  if (message.includes("hello") || message.includes("hi") || message.includes("hey") || conversationContext.questionCount === 1) {
    return generateWelcomeResponse();
  }
  
  // Handle follow-up questions and context
  if (conversationContext.lastTopic && (message.includes("yes") || message.includes("tell me more") || message.includes("what about"))) {
    return generateFollowUpResponse(conversationContext.lastTopic);
  }
  
  // Natural beauty conversation based on content analysis
  return generateNaturalBeautyResponse(userMessage);
}

// Generate welcome responses
function generateWelcomeResponse() {
  const welcomeResponses = [
    "Hello! I'm your L'Oréal beauty expert! I'm here to help with absolutely anything beauty-related - from skincare concerns to makeup techniques, hair care, product recommendations, or beauty routines. What would you like to explore today?",
    "Hi there! Welcome to your personal L'Oréal beauty consultation! Whether you have specific concerns, want to try something new, or need help with your current routine, I'm here to help. What's on your mind?",
    "Hey! I'm so excited to help you with all things L'Oréal beauty! I can assist with product recommendations, beauty tips, routine advice, color matching, or answer any beauty questions you have. How can I help you look and feel amazing today?"
  ];
  return welcomeResponses[Math.floor(Math.random() * welcomeResponses.length)];
}

// Generate follow-up responses based on previous topic
function generateFollowUpResponse(lastTopic) {
  const followUpResponses = {
    skincare: [
      "Great! Let's dive deeper into skincare. L'Oréal has incredible innovations like our Revitalift line with Pro-Retinol, Hydra Genius with hyaluronic acid, and Pure-Clay masks for different concerns. What specific skin issues are you dealing with, or what results are you hoping to achieve?",
      "I love talking skincare! L'Oréal's research labs have created some amazing formulas. Are you interested in daily care routines, specific treatments, anti-aging, hydration, or something else? I can recommend the perfect products for your unique needs!"
    ],
    makeup: [
      "Makeup is so fun! L'Oréal has everything from everyday essentials to glamorous looks. Are you interested in complexion products, eye makeup, lip colors, or maybe learning new techniques? I'd love to help you create your perfect look!",
      "There's so much to explore in makeup! Whether you're a beginner looking for basics or an expert wanting to try new trends, L'Oréal has incredible options. What type of looks do you usually go for, or what would you like to experiment with?"
    ],
    hair: [
      "Hair care is such a personal journey! L'Oréal Elvive has solutions for every hair type and concern. Are you dealing with damage, dryness, color-treated hair, lack of volume, or something else? I can help you build the perfect hair care routine!",
      "I love helping with hair transformations! L'Oréal's hair care technology is amazing. Tell me about your hair - its texture, any treatments you've had, your styling routine, or challenges you're facing. We'll find the perfect products!"
    ]
  };
  
  const responses = followUpResponses[lastTopic] || [
    "I'd love to help you more! What specific aspects would you like to know about? I'm here to give you detailed, personalized advice based on exactly what you need.",
    "Tell me more about what you're looking for! The more details you share, the better I can recommend the perfect L'Oréal products and techniques for you."
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
}

// Natural beauty response generator - handles ANY beauty question intelligently
function generateNaturalBeautyResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Analyze the message for beauty context and respond naturally
  let response = "";
  let detectedTopic = "general";
  
  // SKIN-RELATED RESPONSES (comprehensive and natural)
  if (message.includes("skin") || message.includes("face") || message.includes("complexion")) {
    if (message.includes("sensitive")) {
      response = "Sensitive skin can be tricky, but L'Oréal has you covered! Our gentle formulations include Hydra Genius (amazing for sensitive skin hydration), dermatologist-tested Micellar Water for gentle cleansing, and fragrance-free options. The key is using products specifically designed for sensitivity. What reactions do you typically experience, and what's your current skincare routine like?";
      detectedTopic = "sensitive_skin";
    } else if (message.includes("dry") || message.includes("dehydrated") || message.includes("flaky") || message.includes("tight")) {
      response = "Dry skin needs lots of love and hydration! L'Oréal's Hydra Genius line is incredible - the Water-Gel provides 72-hour moisture with hyaluronic acid. For deeper hydration, try our Revitalift moisturizers with ceramides. Age Perfect is perfect for mature dry skin too. Do you experience dryness all over your face or in specific areas? And what's your current moisturizing routine?";
      detectedTopic = "dry_skin";
    } else if (message.includes("oily") || message.includes("shiny") || message.includes("greasy") || message.includes("pores")) {
      response = "Oily skin is totally manageable with the right approach! L'Oréal's Pure-Clay masks are game-changers - the Detox mask with charcoal is perfect for deep cleaning. For daily care, gentle cleansing is key (harsh products make oiliness worse!). Our oil-free moisturizers and mattifying foundations help control shine. Where do you get oiliest, and what products have you tried before?";
      detectedTopic = "oily_skin";
    } else if (message.includes("acne") || message.includes("breakout") || message.includes("pimple") || message.includes("blemish")) {
      response = "Breakouts are so frustrating, but L'Oréal has effective solutions! Our Pure-Clay line targets different concerns - Detox for deep cleaning, Exfoliate for gentle renewal. The Revitalift Bright Reveal cleanser has glycolic acid for daily treatment. Non-comedogenic makeup like True Match won't clog pores. What type of breakouts do you get, and have you noticed any triggers?";
      detectedTopic = "acne";
    } else if (message.includes("aging") || message.includes("wrinkle") || message.includes("fine line") || message.includes("firm")) {
      response = "Anti-aging is one of L'Oréal's specialties! Our Revitalift line has powerful ingredients like Pro-Retinol and Vitamin C. The Derm Intensives collection offers professional-strength treatments at home. Age Perfect is specifically formulated for mature skin needs. What are your main concerns - fine lines, firmness, dark spots, or overall texture? And what's your current anti-aging routine?";
      detectedTopic = "antiaging";
    } else {
      response = "Skincare is so important and personal! L'Oréal has solutions for every skin type and concern. From gentle cleansers to powerful treatments, hydrating serums to protective moisturizers - we've got you covered. Tell me more about your skin - what's your type, any specific concerns, or what results are you hoping to achieve? I'd love to help you build the perfect routine!";
      detectedTopic = "skincare";
    }
  }
  
  // MAKEUP-RELATED RESPONSES (comprehensive and natural)
  else if (message.includes("makeup") || message.includes("foundation") || message.includes("concealer") || message.includes("powder") || message.includes("base")) {
    if (message.includes("foundation") || message.includes("base") || message.includes("coverage")) {
      response = "Foundation is the base of everything! L'Oréal's True Match has 45 shades with perfect undertone matching - it's like having a custom color made for you. For different needs: Infallible Pro-Matte for long wear, True Match Lumi for a radiant glow, Magic Nude for lightweight feel, Age Perfect for mature skin. What's your skin type, desired coverage level, and biggest foundation challenges?";
      detectedTopic = "foundation";
    } else {
      response = "Makeup is such an art form! L'Oréal has everything from everyday essentials to bold statement pieces. Whether you're looking for the perfect everyday look, want to learn new techniques, or experiment with trends - I'm here to help! What type of makeup are you most interested in, or what look are you trying to achieve?";
      detectedTopic = "makeup";
    }
  }
  
  // EYE MAKEUP RESPONSES
  else if (message.includes("eyes") || message.includes("mascara") || message.includes("eyeshadow") || message.includes("liner") || message.includes("lashes")) {
    response = "Eye makeup can completely transform your look! L'Oréal's mascaras are legendary - Voluminous Lash Paradise for drama, Telescopic for precision, waterproof options for all-day wear. Our eyeshadow palettes and liners complement perfectly. What's your eye shape, preferred style (natural vs dramatic), and any specific eye makeup challenges you face?";
    detectedTopic = "eyes";
  }
  
  // LIP RESPONSES
  else if (message.includes("lips") || message.includes("lipstick") || message.includes("gloss") || message.includes("rouge")) {
    response = "Lip products are so personal and expressive! L'Oréal's lip range is incredible - Rouge Signature for all-day matte comfort, Color Riche for luxurious cream, lip oils for care and shine. With over 100 shades from bold statements to perfect nudes. What finish do you prefer, what shades do you gravitate toward, and what's most important to you - longevity, comfort, or color payoff?";
    detectedTopic = "lips";
  }
  
  // HAIR RESPONSES
  else if (message.includes("hair") || message.includes("shampoo") || message.includes("conditioner") || message.includes("elvive")) {
    response = "Hair care is so individual! L'Oréal Elvive has targeted solutions for every concern - Total Repair 5 for damage, Color Vibrancy for color-treated hair, Volume for fine hair, Smooth for frizz control. Our formulas address specific needs, not just hair types. What's your hair like - texture, length, any chemical treatments, styling habits, and what challenges are you facing?";
    detectedTopic = "hair";
  }
  
  // COLOR/SHADE QUESTIONS
  else if (message.includes("color") || message.includes("shade") || message.includes("match") || message.includes("tone")) {
    response = "Color matching is such an important part of beauty! L'Oréal's True Match technology takes the guesswork out of finding your perfect shade. Whether it's foundation, lipstick, or hair color, we have incredible ranges. What are you looking to match, and do you know your undertones? I can help you find your perfect shades across our entire collection!";
    detectedTopic = "color";
  }
  
  // ROUTINE QUESTIONS
  else if (message.includes("routine") || message.includes("steps") || message.includes("order") || message.includes("morning") || message.includes("evening")) {
    response = "Beauty routines are so personal and should work for YOUR lifestyle! Whether you want a quick 5-minute routine or love a luxurious multi-step process, L'Oréal has products that fit. Are you looking to build a skincare routine, makeup routine, hair care regimen, or all of the above? Tell me about your current routine and what you'd like to improve or change!";
    detectedTopic = "routine";
  }
  
  // CATCH-ALL FOR ANY BEAUTY QUESTION
  else {
    response = generateOpenBeautyResponse(userMessage);
    detectedTopic = "general";
  }
  
  // Update conversation context
  conversationContext.lastTopic = detectedTopic;
  
  return response;
}

// Open response for any beauty question not specifically categorized
function generateOpenBeautyResponse(userMessage) {
  const openResponses = [
    `That's a great question! L'Oréal has over 100 years of beauty innovation, so I'm confident we have solutions for you. Could you tell me a bit more about what you're looking for? The more details you share, the better I can help you find the perfect products and advice!`,
    `I love that question! Beauty is so individual, and L'Oréal's extensive range covers virtually every beauty need. To give you the most helpful recommendations, could you share more about your specific situation, concerns, or what you're hoping to achieve?`,
    `That's exactly the kind of question I'm here for! L'Oréal creates products for every beauty challenge and preference. Help me understand more about your needs - your skin/hair type, current routine, lifestyle, or what results you're looking for - so I can give you personalized advice!`,
    `Great question! L'Oréal's research and development teams work constantly to solve beauty challenges like yours. I'd love to help you find the perfect solution! Could you give me more context about your situation so I can recommend the best products and techniques for you?`
  ];
  return openResponses[Math.floor(Math.random() * openResponses.length)];
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
