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
    
    // Enhanced L'Oréal responses with comprehensive knowledge
    let response = generateLorealResponse(userMessage);
    displayMessage(response, "bot");
  }, 1500);
});

// Advanced L'Oréal Beauty Expert - Comprehensive Product Knowledge
function generateLorealResponse(userMessage) {
  const message = userMessage.toLowerCase();
  conversationContext.questionCount++;
  
  // Off-topic check first
  if (isOffTopic(message)) {
    const redirectResponses = [
      "I'm here specifically to help with L'Oréal beauty products and advice! Let's talk about how I can enhance your beauty routine today. Are you interested in makeup, skincare, or haircare? 💄✨",
      "I'd love to focus on L'Oréal beauty topics! Whether you need makeup tips, skincare advice, or haircare solutions, I'm here to help. What beauty goals are you working on? 🌟",
      "Let's keep our conversation focused on L'Oréal beauty! I'm passionate about helping you discover the perfect products for your routine. What would you like to explore first? ✨"
    ];
    return redirectResponses[Math.floor(Math.random() * redirectResponses.length)];
  }
  
  // SENSITIVE SKIN - Specific detection and comprehensive response
  if (message.includes("sensitive") && (message.includes("skin") || message.includes("face"))) {
    const sensitiveResponses = [
      "Sensitive skin needs extra gentle care! L'Oréal has amazing options for you: our Hydra Genius line is formulated for sensitive skin with gentle hydration. The Revitalift Gentle line offers anti-aging benefits without irritation. Have you identified specific triggers for your sensitivity?",
      "I understand sensitive skin concerns! L'Oréal's gentle formulations include our Micellar Water for makeup removal (no harsh rubbing needed), and our Pure-Clay masks are designed to be gentle yet effective. What reactions have you experienced with other products?",
      "Sensitive skin deserves the best care! L'Oréal's dermatologist-tested products include fragrance-free options and hypoallergenic formulas. Our Age Perfect line has gentle anti-aging products perfect for sensitive skin. What's your biggest concern - redness, dryness, or irritation?"
    ];
    return sensitiveResponses[Math.floor(Math.random() * sensitiveResponses.length)];
  }
  
  // ACNE/BREAKOUTS - Comprehensive acne solutions
  if (message.includes("acne") || message.includes("breakout") || message.includes("blemish") || message.includes("pimple")) {
    const acneResponses = [
      "Acne-prone skin needs the right balance! L'Oréal's Pure-Clay line is fantastic - our Detox mask with charcoal draws out impurities, while our Exfoliate mask gently removes dead skin. For daily care, try our Revitalift Bright Reveal cleanser with glycolic acid. What type of breakouts are you dealing with?",
      "I can definitely help with acne concerns! L'Oréal offers targeted solutions: our Age Perfect Rosy Tone moisturizer won't clog pores, and our True Match foundation has non-comedogenic options. For treatment, consider our Pure-Clay Blemish Rescue mask. Do you prefer gentle or stronger acne treatments?",
      "Breakouts can be frustrating! L'Oréal's approach combines gentle cleansing with effective treatment. Our Micellar Water removes makeup without over-drying, while our Clay masks target specific concerns. The key is consistency! What's your current routine, and where do you break out most?"
    ];
    return acneResponses[Math.floor(Math.random() * acneResponses.length)];
  }
  
  // DRY SKIN - Hydration focused responses
  if (message.includes("dry") && (message.includes("skin") || message.includes("face"))) {
    const dryResponses = [
      "Dry skin needs intense hydration! L'Oréal's Hydra Genius line is perfect - our Water-Gel moisturizer provides 72-hour hydration with hyaluronic acid. For nighttime, try Revitalift Triple Power moisturizer with Pro-Retinol. The Age Perfect Hydra-Nutrition line is also amazing for mature dry skin. How severe is your dryness?",
      "I love helping with dry skin! L'Oréal's hydrating heroes include our Micellar Water (won't strip natural oils), Hydra Genius serum for deep moisture, and our nourishing cleansers. For makeup, True Match Lumi foundation adds a dewy finish. Do you experience tightness, flaking, or both?",
      "Dry skin deserves extra love! L'Oréal's moisture-rich formulas include ceramides and hyaluronic acid. Our Revitalift line offers hydrating anti-aging benefits, while Pure-Clay masks have hydrating variants. The secret is layering hydration! What's your climate like, and when is your skin driest?"
    ];
    return dryResponses[Math.floor(Math.random() * dryResponses.length)];
  }
  
  // OILY SKIN - Oil control solutions
  if (message.includes("oily") && (message.includes("skin") || message.includes("face"))) {
    const oilyResponses = [
      "Oily skin needs balance, not stripping! L'Oréal's Pure-Clay Detox mask with charcoal is perfect for weekly deep cleaning. For daily care, try our Revitalift Bright Reveal cleanser and oil-free moisturizers. Our Infallible Pro-Matte foundation controls shine all day. Where do you get oiliest?",
      "I understand oily skin challenges! L'Oréal offers excellent oil control: Pure-Clay Purify mask reduces shine, while our lightweight moisturizers hydrate without greasiness. True Match foundation has oil-free formulas, and our setting powders keep you matte. Do you have combination skin or oily everywhere?",
      "Oily skin can be managed beautifully! L'Oréal's approach includes gentle cleansing (harsh products make oil worse!), clay-based treatments, and shine-controlling makeup. Our Age Perfect line even has oil-control anti-aging products. What time of day is oil most problematic for you?"
    ];
    return oilyResponses[Math.floor(Math.random() * oilyResponses.length)];
  }
  
  // ANTI-AGING - Comprehensive age-defying solutions
  if (message.includes("aging") || message.includes("wrinkle") || message.includes("fine line") || message.includes("mature")) {
    const antiAgingResponses = [
      "Anti-aging is L'Oréal's specialty! Our Revitalift line features Pro-Retinol and Vitamin C for powerful results. Try Triple Power moisturizer for day and Bright Reveal for evening. Age Perfect line targets mature skin with nourishing formulas. What's your main concern - fine lines, firmness, or dark spots?",
      "I love our anti-aging innovations! L'Oréal's Revitalift Derm Intensives line has 10% Pure Glycolic Acid and 1.5% Pure Hyaluronic Acid - professional-strength at home! Our Age Perfect Rosy Tone adds subtle color while fighting aging. Are you new to anti-aging or looking to upgrade your routine?",
      "Age-defying skincare is so exciting! L'Oréal offers everything from gentle Age Perfect formulas to powerful Revitalift treatments. Our True Match foundation even has anti-aging benefits! The key is consistency and sun protection. What's your age range, and what results are you hoping to see?"
    ];
    return antiAgingResponses[Math.floor(Math.random() * antiAgingResponses.length)];
  }
  
  // FOUNDATION - Detailed foundation matching
  if (message.includes("foundation") || message.includes("base") || message.includes("coverage")) {
    const foundationResponses = [
      "Foundation matching is my expertise! L'Oréal's True Match has 45 shades with undertone matching - cool (C), warm (W), and neutral (N). For oily skin, try Infallible Pro-Matte. For dry skin, True Match Lumi adds radiance. For mature skin, Age Perfect foundation offers buildable coverage. What's your skin type and coverage preference?",
      "Let's find your perfect foundation! L'Oréal offers every formula: True Match for everyday wear, Infallible for long-lasting coverage, Magic Nude for lightweight feel, and Age Perfect for mature skin. Our shade range is incredibly inclusive. Do you know your undertone, and what finish do you prefer?",
      "Foundation can transform your look! L'Oréal's True Match technology ensures perfect color matching, while our various formulas suit every need. Pro tip: mix shades for custom color, or blend with moisturizer for lighter coverage. What's your biggest foundation challenge - finding the right shade, longevity, or finish?"
    ];
    return foundationResponses[Math.floor(Math.random() * foundationResponses.length)];
  }
  
  // HAIR CARE - Specific hair concerns
  if (message.includes("hair") || message.includes("shampoo") || message.includes("conditioner")) {
    const hairResponses = [
      "Hair care is so personal! L'Oréal Elvive has solutions for every concern: Total Repair 5 for damaged hair, Color Vibrancy for color-treated hair, Volume for fine hair, and Smooth for frizzy hair. Our sulfate-free formulas are gentle yet effective. What's your hair type and biggest challenge?",
      "I love helping with hair transformations! L'Oréal's Advanced Haircare includes everything from clarifying to deep conditioning. Our Power Moisture line hydrates dry hair, while Power Volume adds body. For color protection, nothing beats our Color Vibrancy line. How often do you wash, and what results do you want?",
      "Healthy hair starts with the right products! L'Oréal Elvive offers targeted solutions based on hair concerns, not just type. We have treatments for heat damage, chemical damage, and environmental stress. Our leave-in treatments provide extra protection. What's your hair history - color, heat styling, chemical treatments?"
    ];
    return hairResponses[Math.floor(Math.random() * hairResponses.length)];
  }
  
  // MASCARA & EYE MAKEUP
  if (message.includes("mascara") || message.includes("eyes") || message.includes("lashes")) {
    const eyeResponses = [
      "L'Oréal mascaras are legendary! Voluminous Lash Paradise gives incredible volume and length, while Telescopic creates precise, separated lashes. For sensitive eyes, try our gentle formulas. Do you prefer dramatic volume or natural definition?",
      "Eye makeup is transformative! Our mascaras include waterproof options, tubing formulas, and lengthening technologies. L'Oréal's eyeshadow palettes complement any mascara perfectly. What's your eye shape, and what look are you trying to achieve?",
      "The eyes have it! L'Oréal's eye makeup range includes everything from bold mascaras to subtle liners. Our Carbon Black formula provides intense color, while our brown shades offer natural definition. Do you have any eye sensitivities or specific preferences?"
    ];
    return eyeResponses[Math.floor(Math.random() * eyeResponses.length)];
  }
  
  // LIPSTICK & LIP PRODUCTS
  if (message.includes("lipstick") || message.includes("lips") || message.includes("rouge")) {
    const lipResponses = [
      "L'Oréal lip products are amazing! Rouge Signature offers all-day liquid matte comfort, while Color Riche provides creamy, nourishing coverage. Our lip oils add shine and care. What's your preferred finish - matte, satin, or glossy?",
      "Lip color is so expressive! L'Oréal offers over 100 shades from bold statement reds to perfect everyday nudes. Our formulas include long-wearing, moisturizing, and plumping options. Do you prefer subtle enhancement or bold statement lips?",
      "Perfect lips start with the right products! L'Oréal's lip range includes prep (scrubs and balms), color (lipsticks and glosses), and care (treatments and oils). What's your lip care routine like, and what shades do you gravitate toward?"
    ];
    return lipResponses[Math.floor(Math.random() * lipResponses.length)];
  }
  
  // DEFAULT BEAUTY RESPONSE - Open-ended and helpful
  return generateOpenEndedBeautyResponse(message);
}

// Open-ended beauty response for any beauty question
function generateOpenEndedBeautyResponse(message) {
  const openResponses = [
    "That's a great beauty question! L'Oréal has over 100 years of beauty innovation, so we likely have the perfect solution for you. Could you tell me more details about what you're looking for? I want to give you the most personalized recommendation possible!",
    "I'd love to help you with that! L'Oréal's extensive range covers every beauty need imaginable. To give you the best advice, could you share more about your specific concerns, skin type, or what results you're hoping to achieve?",
    "Beauty is so individual, and that's what I love about it! L'Oréal has products for every person, preference, and concern. Help me understand exactly what you need so I can recommend the perfect products from our amazing collection!",
    "That's exactly the kind of question I'm here for! L'Oréal's research and development creates solutions for every beauty challenge. Tell me more about your situation - your skin type, current routine, budget, or any specific concerns - so I can give you targeted recommendations!"
  ];
  return openResponses[Math.floor(Math.random() * openResponses.length)];
}

// Function to detect off-topic conversations
function isOffTopic(message) {
  const offTopicKeywords = [
    "weather", "sports", "politics", "food", "music", "movies", "work", "school",
    "travel", "technology", "games", "news", "health", "medicine", "doctor",
    "recipe", "cooking", "restaurant", "car", "house", "money", "investment"
  ];
  
  const beautyKeywords = [
    "beauty", "makeup", "skin", "hair", "cosmetic", "loreal", "foundation",
    "lipstick", "mascara", "skincare", "routine", "product", "shade", "color",
    "face", "eyes", "lips", "cream", "serum", "moisturizer", "cleanser"
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
