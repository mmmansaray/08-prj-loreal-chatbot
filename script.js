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

// Advanced AI Conversation Context & Memory System
let conversationContext = {
  lastTopic: null,
  userPreferences: {},
  questionCount: 0,
  lastMessage: null,
  skinType: null,
  skinConcerns: [],
  askedQuestions: [],
  detectedInfo: {},
  conversationHistory: [],
  userProfile: {
    age: null,
    lifestyle: null,
    experience: null,
    budget: null,
    currentProducts: [],
    favoriteColors: [],
    skinGoals: [],
    makeupStyle: null
  },
  contextMemory: {
    mentionedProducts: [],
    expressedPreferences: [],
    rejectedSuggestions: [],
    followUpNeeded: [],
    currentNeed: null
  },
  intelligenceLevel: {
    understandsComplexQueries: true,
    remembersConversation: true,
    makesConnections: true,
    anticipatesNeeds: true
  }
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

    // Ultra-intelligent L'Oréal responses
    let response = generateLorealResponse(userMessage);
    displayMessage(response, "bot");
  }, 1500);
});

// ULTRA-INTELLIGENT L'Oréal Beauty AI - Advanced Conversation Engine
function generateLorealResponse(userMessage) {
  const message = userMessage.toLowerCase();
  conversationContext.questionCount++;
  
  // Store conversation in memory
  conversationContext.conversationHistory.push({
    user: userMessage,
    timestamp: Date.now(),
    processed: false
  });
  
  // Advanced information extraction and context building
  performAdvancedAnalysis(userMessage);
  
  // Off-topic check with intelligence
  if (isOffTopic(message)) {
    return generateIntelligentRedirect();
  }
  
  // ULTRA-INTELLIGENT RESPONSE SYSTEM
  if (conversationContext.questionCount === 1) {
    return generateWelcomeResponse();
  }
  
  // Advanced context-aware response generation
  return generateUltraIntelligentResponse(userMessage);
}

// Advanced Analysis Engine - Extracts maximum information
function performAdvancedAnalysis(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Advanced skin type detection
  extractSkinInformation(message);
  
  // Lifestyle and preference detection
  extractLifestyleInfo(message);
  
  // Product experience detection
  extractExperienceLevel(message);
  
  // Emotional state and urgency detection
  extractEmotionalContext(message);
  
  // Goal and outcome detection
  extractBeautyGoals(message);
  
  // Budget and shopping behavior
  extractShoppingBehavior(message);
}

// Extract comprehensive skin information
function extractSkinInformation(message) {
  // Skin types
  if (message.includes("oily") || message.includes("greasy") || message.includes("shine")) {
    conversationContext.skinType = "oily";
    if (message.includes("very oily") || message.includes("extremely oily")) {
      conversationContext.userProfile.skinIntensity = "high";
    }
  }
  if (message.includes("dry") || message.includes("flaky") || message.includes("tight")) {
    conversationContext.skinType = "dry";
    if (message.includes("very dry") || message.includes("extremely dry")) {
      conversationContext.userProfile.skinIntensity = "high";
    }
  }
  if (message.includes("sensitive") || message.includes("irritation") || message.includes("react")) {
    conversationContext.skinType = "sensitive";
  }
  if (message.includes("combination") || message.includes("t-zone")) {
    conversationContext.skinType = "combination";
  }
  
  // Advanced skin concerns detection
  const concerns = {
    "acne": ["acne", "breakout", "pimple", "blemish", "spots"],
    "aging": ["wrinkle", "fine line", "aging", "mature", "firmness", "sagging"],
    "hyperpigmentation": ["dark spot", "pigmentation", "uneven tone", "discoloration", "melasma"],
    "redness": ["redness", "irritation", "inflamed", "blotchy"],
    "pores": ["large pores", "blackhead", "whitehead", "clogged"],
    "texture": ["rough", "bumpy", "uneven texture", "smooth"],
    "dullness": ["dull", "tired", "glow", "radiance", "brightness"]
  };
  
  Object.keys(concerns).forEach(concern => {
    if (concerns[concern].some(keyword => message.includes(keyword))) {
      if (!conversationContext.skinConcerns.includes(concern)) {
        conversationContext.skinConcerns.push(concern);
      }
    }
  });
}

// Extract lifestyle information
function extractLifestyleInfo(message) {
  // Age detection
  if (message.includes("teenager") || message.includes("teen")) {
    conversationContext.userProfile.age = "teen";
  } else if (message.includes("20s") || message.includes("twenties")) {
    conversationContext.userProfile.age = "20s";
  } else if (message.includes("30s") || message.includes("thirties")) {
    conversationContext.userProfile.age = "30s";
  } else if (message.includes("40s") || message.includes("forties") || message.includes("mature")) {
    conversationContext.userProfile.age = "40s+";
  }
  
  // Lifestyle detection
  if (message.includes("busy") || message.includes("quick") || message.includes("minutes")) {
    conversationContext.userProfile.lifestyle = "busy";
  }
  if (message.includes("natural") || message.includes("minimal")) {
    conversationContext.userProfile.makeupStyle = "natural";
  }
  if (message.includes("glam") || message.includes("dramatic") || message.includes("bold")) {
    conversationContext.userProfile.makeupStyle = "dramatic";
  }
}

// Extract beauty experience level
function extractExperienceLevel(message) {
  if (message.includes("beginner") || message.includes("new to") || message.includes("don't know")) {
    conversationContext.userProfile.experience = "beginner";
  } else if (message.includes("expert") || message.includes("experienced") || message.includes("makeup artist")) {
    conversationContext.userProfile.experience = "advanced";
  } else if (message.includes("some experience") || message.includes("okay at")) {
    conversationContext.userProfile.experience = "intermediate";
  }
}

// Extract emotional context and urgency
function extractEmotionalContext(message) {
  const urgencyWords = ["urgent", "need now", "asap", "quickly", "emergency", "help"];
  const frustrationWords = ["frustrated", "annoyed", "nothing works", "tried everything"];
  const excitementWords = ["excited", "love", "amazing", "perfect", "exactly"];
  
  if (urgencyWords.some(word => message.includes(word))) {
    conversationContext.contextMemory.urgency = "high";
  }
  if (frustrationWords.some(word => message.includes(word))) {
    conversationContext.contextMemory.emotion = "frustrated";
  }
  if (excitementWords.some(word => message.includes(word))) {
    conversationContext.contextMemory.emotion = "excited";
  }
}

// Extract beauty goals
function extractBeautyGoals(message) {
  const goals = {
    "flawless_skin": ["flawless", "perfect skin", "clear skin"],
    "anti_aging": ["younger", "anti-aging", "turn back time"],
    "confidence": ["confident", "feel better", "boost"],
    "professional": ["work", "professional", "office"],
    "special_occasion": ["wedding", "date", "party", "event"]
  };
  
  Object.keys(goals).forEach(goal => {
    if (goals[goal].some(keyword => message.includes(keyword))) {
      if (!conversationContext.userProfile.skinGoals.includes(goal)) {
        conversationContext.userProfile.skinGoals.push(goal);
      }
    }
  });
}

// Extract shopping behavior and budget
function extractShoppingBehavior(message) {
  if (message.includes("budget") || message.includes("affordable") || message.includes("cheap")) {
    conversationContext.userProfile.budget = "budget";
  }
  if (message.includes("luxury") || message.includes("premium") || message.includes("high-end")) {
    conversationContext.userProfile.budget = "premium";
  }
  if (message.includes("drugstore") || message.includes("pharmacy")) {
    conversationContext.userProfile.budget = "drugstore";
  }
}

// Ultra-Intelligent Response Generator
function generateUltraIntelligentResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Check if we have enough context to give comprehensive advice
  if (hasComprehensiveContext()) {
    return generatePersonalizedExpertAdvice(userMessage);
  }
  
  // Check for specific product requests
  if (isSpecificProductRequest(message)) {
    return handleSpecificProductRequest(userMessage);
  }
  
  // Check for problem-solving requests
  if (isProblemSolvingRequest(message)) {
    return handleProblemSolving(userMessage);
  }
  
  // Check for routine building requests
  if (isRoutineRequest(message)) {
    return handleRoutineBuilding(userMessage);
  }
  
  // Advanced topic detection and response
  return handleAdvancedTopicDetection(userMessage);
}

// Check if we have enough context for expert advice
function hasComprehensiveContext() {
  return conversationContext.skinType && 
         conversationContext.skinConcerns.length > 0 && 
         conversationContext.questionCount > 2;
}

// Generate personalized expert advice based on full context
function generatePersonalizedExpertAdvice(userMessage) {
  let advice = `Perfect! Based on our conversation, I've learned you have ${conversationContext.skinType} skin`;
  
  if (conversationContext.skinConcerns.length > 0) {
    advice += ` with concerns about ${conversationContext.skinConcerns.join(", ")}`;
  }
  
  if (conversationContext.userProfile.age) {
    advice += ` and you're in your ${conversationContext.userProfile.age}`;
  }
  
  advice += ". Here's my complete L'Oréal recommendation system:\n\n";
  
  // Comprehensive product recommendations
  advice += generateComprehensiveRecommendations();
  
  // Routine suggestions
  advice += generatePersonalizedRoutine();
  
  // Pro tips based on their specific situation
  advice += generatePersonalizedTips();
  
  // Follow-up based on what we haven't covered
  advice += generateIntelligentFollowUp();
  
  return advice;
}

// Generate comprehensive recommendations based on full profile
function generateComprehensiveRecommendations() {
  let recs = "🎯 **YOUR PERSONALIZED L'ORÉAL REGIMEN:**\n\n";
  
  // Skincare based on type and concerns
  recs += "🧴 **SKINCARE FOUNDATION:**\n";
  
  if (conversationContext.skinType === "sensitive") {
    recs += "• **Hydra Genius Aloe Water** - Your skin will love the 70% aloe content\n";
    recs += "• **Micellar Water All Skin Types** - Gentle cleansing without irritation\n";
  } else if (conversationContext.skinType === "oily") {
    recs += "• **Pure-Clay Detox Mask** - Charcoal deep-cleans without over-drying\n";
    recs += "• **Revitalift Bright Reveal Cleanser** - Glycolic acid controls oil gently\n";
  } else if (conversationContext.skinType === "dry") {
    recs += "• **Hydra Genius Water-Gel** - 72-hour hydration that your skin craves\n";
    recs += "• **Revitalift Triple Power** - Pro-Retinol + intense moisture\n";
  }
  
  // Address specific concerns
  if (conversationContext.skinConcerns.includes("aging")) {
    recs += "• **Revitalift Derm Intensives 10% Glycolic Acid** - Professional strength anti-aging\n";
  }
  if (conversationContext.skinConcerns.includes("acne")) {
    recs += "• **Pure-Clay Blemish Rescue** - Targets breakouts with salicylic acid\n";
  }
  
  recs += "\n💄 **MAKEUP MATCHES:**\n";
  
  // Foundation based on skin type and preferences
  if (conversationContext.skinType === "oily") {
    recs += "• **Infallible Pro-Matte 24H** - Controls oil while looking flawless\n";
  } else if (conversationContext.skinType === "dry") {
    recs += "• **True Match Lumi** - Adds that healthy glow your skin needs\n";
  } else if (conversationContext.skinType === "sensitive") {
    recs += "• **True Match Super-Blendable** - Hypoallergenic and gentle\n";
  }
  
  // Style-based recommendations
  if (conversationContext.userProfile.makeupStyle === "natural") {
    recs += "• **Magic Nude Liquid Powder** - Barely-there natural finish\n";
    recs += "• **Voluminous Original Mascara** - Classic, natural enhancement\n";
  } else if (conversationContext.userProfile.makeupStyle === "dramatic") {
    recs += "• **Infallible Lacquer Liner 24H** - Bold, precise lines\n";
    recs += "• **Voluminous X Fiber Mascara** - Maximum drama and length\n";
  }
  
  recs += "\n";
  return recs;
}

// Generate personalized routine
function generatePersonalizedRoutine() {
  let routine = "📅 **YOUR CUSTOM ROUTINE:**\n\n";
  
  routine += "🌅 **MORNING ";
  if (conversationContext.userProfile.lifestyle === "busy") {
    routine += "(5-MINUTE ROUTINE)";
  }
  routine += ":**\n";
  
  if (conversationContext.skinType === "oily") {
    routine += "1. Gentle cleanser\n2. Oil-free moisturizer\n3. Infallible Pro-Matte foundation\n4. Setting powder\n";
  } else if (conversationContext.skinType === "dry") {
    routine += "1. Micellar water (gentle cleansing)\n2. Hyaluronic acid serum on damp skin\n3. Rich moisturizer\n4. True Match Lumi foundation\n";
  } else if (conversationContext.skinType === "sensitive") {
    routine += "1. Micellar water only\n2. Gentle moisturizer\n3. Hypoallergenic foundation\n4. Minimal powder\n";
  }
  
  routine += "\n🌙 **EVENING:**\n";
  routine += "1. Double cleanse if wearing makeup\n2. Treatment products (masks 2-3x/week)\n3. Night moisturizer\n4. Eye cream if needed\n\n";
  
  return routine;
}

// Generate personalized tips
function generatePersonalizedTips() {
  let tips = "💡 **PERSONALIZED PRO TIPS:**\n";
  
  if (conversationContext.skinType === "oily") {
    tips += "• Don't skip moisturizer - it actually makes oiliness worse!\n";
    tips += "• Use blotting papers instead of powder for touch-ups\n";
  }
  
  if (conversationContext.skinConcerns.includes("acne")) {
    tips += "• Start slowly with active ingredients - your skin needs time to adjust\n";
    tips += "• Non-comedogenic is key - check every product label\n";
  }
  
  if (conversationContext.userProfile.experience === "beginner") {
    tips += "• Start with 3-4 basic products and build from there\n";
    tips += "• Practice application techniques when you have time\n";
  }
  
  tips += "\n";
  return tips;
}

// Generate intelligent follow-up
function generateIntelligentFollowUp() {
  let followUp = "🤔 **WHAT'S NEXT?**\n";
  
  if (!conversationContext.userProfile.budget) {
    followUp += "I'd love to know your budget range so I can prioritize which products to try first! ";
  }
  
  if (conversationContext.skinConcerns.length === 1) {
    followUp += "Are there any other skin concerns you'd like to address? ";
  }
  
  if (!conversationContext.userProfile.experience) {
    followUp += "What's your experience level with makeup and skincare? ";
  }
  
  followUp += "I'm here to fine-tune everything for your perfect routine!";
  
  return followUp;
}

// Specific product request handler
function handleSpecificProductRequest(userMessage) {
  const message = userMessage.toLowerCase();
  
  if (message.includes("foundation")) {
    return generateAdvancedFoundationAdvice();
  }
  if (message.includes("mascara")) {
    return generateAdvancedMascaraAdvice();
  }
  if (message.includes("lipstick") || message.includes("lip")) {
    return generateAdvancedLipAdvice();
  }
  if (message.includes("skincare") || message.includes("routine")) {
    return generateAdvancedSkincareAdvice();
  }
  
  return generateGenericProductAdvice();
}

// Advanced foundation advice with context
function generateAdvancedFoundationAdvice() {
  let advice = "🎨 **FOUNDATION EXPERTISE FOR YOU:**\n\n";
  
  // Customized based on their skin type
  if (conversationContext.skinType === "oily") {
    advice += "For your oily skin, I recommend:\n";
    advice += "• **Infallible Pro-Matte 24H** - Oil-control that lasts all day\n";
    advice += "• **True Match Powder Foundation** - Perfect for touch-ups\n\n";
    advice += "💡 **Application tip:** Use a damp beauty sponge for seamless blending and oil control!\n\n";
  } else if (conversationContext.skinType === "dry") {
    advice += "For your dry skin, perfect options are:\n";
    advice += "• **True Match Lumi** - Adds moisture and radiance\n";
    advice += "• **Age Perfect Radiant Serum Foundation** - Anti-aging + hydration\n\n";
    advice += "💡 **Application tip:** Mix with a drop of facial oil for extra glow!\n\n";
  }
  
  // Shade matching intelligence
  advice += "🎭 **SHADE MATCHING MADE EASY:**\n";
  advice += "L'Oréal's True Match system:\n";
  advice += "• **C (Cool)** - Pink/blue undertones\n";
  advice += "• **N (Neutral)** - Balanced undertones\n";
  advice += "• **W (Warm)** - Yellow/golden undertones\n\n";
  
  advice += "Need help finding your perfect shade or coverage level?";
  
  return advice;
}

// Problem-solving request handler
function handleProblemSolving(userMessage) {
  const message = userMessage.toLowerCase();
  
  if (message.includes("not working") || message.includes("problem")) {
    return generateProblemSolvingAdvice();
  }
  
  return generateGenericAdvice();
}

// Intelligent problem solving
function generateProblemSolvingAdvice() {
  let advice = "🔧 **PROBLEM-SOLVING MODE ACTIVATED:**\n\n";
  
  advice += "Let's troubleshoot together! Here are the most common issues and L'Oréal solutions:\n\n";
  
  advice += "**FOUNDATION ISSUES:**\n";
  advice += "• Oxidizing? Try True Match - it has the most stable formula\n";
  advice += "• Separating? Your skin prep might need work - use Hydra Genius primer\n";
  advice += "• Wrong shade? True Match has 45 options - we'll find yours!\n\n";
  
  advice += "**SKINCARE ISSUES:**\n";
  advice += "• Products not absorbing? Layer from thinnest to thickest consistency\n";
  advice += "• Irritation? Switch to our gentle Hydra Genius or Age Perfect lines\n";
  advice += "• No results? Give active ingredients 6-8 weeks to work\n\n";
  
  advice += "What specific problem are you experiencing? I'll give you the exact solution!";
  
  return advice;
}

// Advanced topic detection
function handleAdvancedTopicDetection(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Color theory and matching
  if (message.includes("color") || message.includes("shade") || message.includes("match")) {
    return generateColorTheoryAdvice();
  }
  
  // Seasonal beauty
  if (message.includes("summer") || message.includes("winter") || message.includes("season")) {
    return generateSeasonalAdvice();
  }
  
  // Occasion-based
  if (message.includes("wedding") || message.includes("date") || message.includes("work") || message.includes("party")) {
    return generateOccasionAdvice(userMessage);
  }
  
  // Advanced techniques
  if (message.includes("technique") || message.includes("how to") || message.includes("application")) {
    return generateTechniqueAdvice();
  }
  
  return generateContextualResponse(userMessage);
}

// Smart redirect for off-topic
function generateIntelligentRedirect() {
  const redirects = [
    "I'm your dedicated L'Oréal beauty expert! I'm passionate about helping you discover the perfect products and techniques. What beauty challenge can I solve for you today? 💄",
    "Let's focus on making you look and feel amazing with L'Oréal! Whether it's skincare, makeup, or haircare, I have solutions for every beauty need. What would you like to explore? ✨",
    "I'm here to be your personal L'Oréal beauty consultant! From color matching to skin concerns to application tips - I've got you covered. What beauty goal are we working on? 🌟"
  ];
  
  return redirects[Math.floor(Math.random() * redirects.length)];
}

// Contextual response for complex queries
function generateContextualResponse(userMessage) {
  let response = "I love helping with beauty questions! ";
  
  if (conversationContext.skinType) {
    response += `Since you have ${conversationContext.skinType} skin, `;
  }
  
  if (conversationContext.skinConcerns.length > 0) {
    response += `and you're concerned about ${conversationContext.skinConcerns.join(" and ")}, `;
  }
  
  response += "here's what I recommend:\n\n";
  response += generateSmartRecommendations();
  
  return response;
}

// Smart recommendations based on context
function generateSmartRecommendations() {
  let recs = "";
  
  if (conversationContext.skinType) {
    recs += `For ${conversationContext.skinType} skin: `;
    
    if (conversationContext.skinType === "oily") {
      recs += "Pure-Clay masks, Infallible Pro-Matte foundation, oil-free moisturizers\n";
    } else if (conversationContext.skinType === "dry") {
      recs += "Hydra Genius line, True Match Lumi foundation, rich moisturizers\n";
    } else if (conversationContext.skinType === "sensitive") {
      recs += "Gentle Micellar Water, hypoallergenic True Match, fragrance-free products\n";
    }
  }
  
  recs += "\nWhat specific aspect would you like me to dive deeper into?";
  return recs;
}

// Check if message is specific product request
function isSpecificProductRequest(message) {
  const productKeywords = ["foundation", "mascara", "lipstick", "concealer", "powder", "primer", "moisturizer", "cleanser"];
  return productKeywords.some(keyword => message.includes(keyword));
}

// Check if message is problem-solving
function isProblemSolvingRequest(message) {
  const problemKeywords = ["problem", "issue", "not working", "help", "fix", "wrong", "trouble"];
  return problemKeywords.some(keyword => message.includes(keyword));
}

// Check if message is routine request
function isRoutineRequest(message) {
  const routineKeywords = ["routine", "steps", "order", "morning", "evening", "daily"];
  return routineKeywords.some(keyword => message.includes(keyword));
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
