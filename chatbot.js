// Intelligent ChatBot - JavaScript Logic
// Author: Devansh Maheshwari
// Frontend simulation of Python AI responses

// AI Response Database (simulating Python backend)
const responses = {
    courses: [
        "📚 <strong>Available Courses:</strong><br>🎓 B.Tech CS (4 years) - ₹80K-₹1.2L/year<br>🎓 BCA (3 years) - ₹60K-₹80K/year<br>🎓 MCA (2 years) - ₹70K-₹1L/year<br><br>Which interests you most?",
        "🎯 <strong>Our Programs:</strong><br>• B.Tech Computer Science - Advanced programming & algorithms<br>• BCA - Bachelor of Computer Applications<br>• MCA - Master of Computer Applications<br><br>All programs include hands-on projects!"
    ],
    
    admission: [
        "📝 <strong>Admission Process:</strong><br>1️⃣ Online Application Submission<br>2️⃣ Entrance Exam (JEE/University Exam)<br>3️⃣ Document Verification<br>4️⃣ Merit List Publication<br>5️⃣ Counseling & Seat Allocation<br><br>📅 Applications typically open in May-June!",
        "🎯 <strong>How to Apply:</strong><br>• Fill online application form<br>• Clear entrance examination<br>• Submit required documents<br>• Check merit list announcement<br>• Attend counseling session<br><br>Need help with any specific step?"
    ],
    
    python: [
        "🐍 <strong>Python Programming:</strong><br>✅ Easy to learn syntax<br>✅ Versatile programming language<br>✅ Great for AI, web development, data science<br>✅ High demand in job market<br>✅ Excellent for beginners<br><br>Perfect starting language for your career!",
        "💻 <strong>Why Choose Python?</strong><br>• Simple and readable code<br>• Rich library ecosystem<br>• Active community support<br>• Cross-platform compatibility<br>• Excellent career prospects<br><br>Learning path: Basics → OOP → Libraries → Projects!"
    ],
    
    career: [
        "💼 <strong>Career Guidance Steps:</strong><br>🎯 Identify your interests and strengths<br>📚 Learn relevant technical skills<br>🔗 Build professional network<br>💪 Gain practical experience<br>📈 Stay updated with industry trends<br><br>Which field interests you most?",
        "🚀 <strong>Popular IT Career Paths:</strong><br>• Software Developer (₹3-15 LPA)<br>• Data Scientist (₹4-20 LPA)<br>• Web Developer (₹2-12 LPA)<br>• AI/ML Engineer (₹5-25 LPA)<br>• DevOps Engineer (₹4-18 LPA)<br><br>Tell me your specific interests!"
    ],
    
    fees: [
        "💰 <strong>Fee Structure (Per Year):</strong><br>• B.Tech Computer Science: ₹80,000 - ₹1,20,000<br>• BCA: ₹60,000 - ₹80,000<br>• MCA: ₹70,000 - ₹1,00,000<br><br>🏆 <strong>Scholarships Available:</strong><br>Merit-based scholarships up to 50% fee reduction!<br>Financial assistance for deserving students."
    ],
    
    programming: [
        "👨‍💻 <strong>Programming Learning Tips:</strong><br>1️⃣ Start with fundamentals (variables, loops, functions)<br>2️⃣ Practice coding daily (consistency is key)<br>3️⃣ Build small projects to apply knowledge<br>4️⃣ Learn debugging and problem-solving<br>5️⃣ Join coding communities and forums<br><br>Which programming language interests you?",
        "🔥 <strong>Programming Success Formula:</strong><br>• Choose one language and master it<br>• Practice on coding platforms<br>• Build a portfolio of projects<br>• Contribute to open source<br>• Network with other developers<br><br>Remember: Practice makes perfect! 🚀"
    ],
    
    hello: [
        "👋 Hello! I'm your AI assistant powered by Python. How can I help you today?",
        "🤖 Hi there! Welcome to our intelligent chatbot. Ask me about courses, programming, or career guidance!",
        "👋 Greetings! I'm here to assist you with academic and technology-related questions. What would you like to know?"
    ],
    
    thanks: [
        "😊 You're very welcome! I'm happy to help anytime you need assistance!",
        "🙂 Glad I could help! Feel free to ask if you have any other questions.",
        "✨ My pleasure! That's what I'm here for. Anything else you'd like to know?"
    ]
};

// Intelligent Response Generator (Python-like logic)
function getResponse(input) {
    const text = input.toLowerCase().trim();
    
    // Advanced keyword matching with scoring
    const intentScores = {};
    
    // Course-related keywords
    if (text.match(/\b(course|program|degree|study|subjects|btech|b\.tech|bca|mca|computer science|cs)\b/)) {
        intentScores.courses = (text.match(/\b(course|program|degree|study|subjects|btech|b\.tech|bca|mca|computer science|cs)\b/g) || []).length;
    }
    
    // Admission-related keywords
    if (text.match(/\b(admission|apply|application|join|enrollment|how to apply|admissions)\b/)) {
        intentScores.admission = (text.match(/\b(admission|apply|application|join|enrollment|how to apply|admissions)\b/g) || []).length;
    }
    
    // Python/Programming keywords
    if (text.match(/\b(python|programming|coding|code|development|software|language)\b/)) {
        if (text.includes('python')) {
            intentScores.python = 2;
        } else {
            intentScores.programming = 1;
        }
    }
    
    // Career-related keywords
    if (text.match(/\b(career|job|work|employment|future|salary|guidance)\b/)) {
        intentScores.career = (text.match(/\b(career|job|work|employment|future|salary|guidance)\b/g) || []).length;
    }
    
    // Fee-related keywords
    if (text.match(/\b(fee|fees|cost|price|money|tuition|scholarship)\b/)) {
        intentScores.fees = (text.match(/\b(fee|fees|cost|price|money|tuition|scholarship)\b/g) || []).length;
    }
    
    // Greeting keywords
    if (text.match(/\b(hello|hi|hey|good morning|good afternoon|good evening|greetings)\b/)) {
        intentScores.hello = 1;
    }
    
    // Thank you keywords
    if (text.match(/\b(thank|thanks|appreciate|grateful|thx)\b/)) {
        intentScores.thanks = 1;
    }
    
    // Find highest scoring intent
    const bestIntent = Object.keys(intentScores).reduce((a, b) => 
        intentScores[a] > intentScores[b] ? a : b, null
    );
    
    // Return response based on best intent
    if (bestIntent && responses[bestIntent]) {
        const responseArray = responses[bestIntent];
        return responseArray[Math.floor(Math.random() * responseArray.length)];
    }
    
    // Default intelligent response
    return `🤔 I understand you're asking about "<strong>${input}</strong>".<br><br>💡 <strong>I can help you with:</strong><br>📚 Academic programs & course information<br>📝 Admission process & requirements<br>💻 Programming & technology guidance<br>💼 Career advice & job market trends<br>💰 Fee structure & scholarships<br><br>What specific topic interests you most?`;
}

// Message Management Functions
function addMessage(message, isUser = false) {
    const chatArea = document.getElementById('chatArea');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.innerHTML = message;
    
    // Insert before typing indicator
    const typingIndicator = document.getElementById('typingIndicator');
    chatArea.insertBefore(messageDiv, typingIndicator);
    
    // Auto-scroll to bottom
    chatArea.scrollTop = chatArea.scrollHeight;
}

function showTyping() {
    const typingIndicator = document.getElementById('typingIndicator');
    typingIndicator.style.display = 'block';
    document.getElementById('chatArea').scrollTop = document.getElementById('chatArea').scrollHeight;
}

function hideTyping() {
    document.getElementById('typingIndicator').style.display = 'none';
}

// Main Send Message Function
function sendMessage() {
    const input = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const message = input.value.trim();
    
    // Validation
    if (!message) {
        input.focus();
        return;
    }
    
    // Add user message to chat
    addMessage(message, true);
    
    // Clear input and update UI
    input.value = '';
    sendBtn.disabled = true;
    sendBtn.textContent = 'Thinking...';
    
    // Show typing indicator
    showTyping();
    
    // Simulate Python AI processing with realistic delay
    const processingTime = 800 + Math.random() * 1200; // 0.8-2 seconds
    
    setTimeout(() => {
        hideTyping();
        
        // Generate AI response
        const response = getResponse(message);
        addMessage(response);
        
        // Reset send button
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send';
        
        // Focus back to input for continued conversation
        input.focus();
    }, processingTime);
}

// Quick Question Function
function sendQuick(question) {
    const input = document.getElementById('chatInput');
    input.value = question;
    sendMessage();
}

// Enhanced Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    
    // Enter key to send message
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !sendBtn.disabled) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Input validation and UI feedback
    chatInput.addEventListener('input', function() {
        const message = this.value.trim();
        sendBtn.style.opacity = message ? '1' : '0.6';
    });
    
    // Auto-focus on input when page loads
    chatInput.focus();
    
    // Welcome message after a short delay
    setTimeout(() => {
        addMessage("👋 Hello! I'm your intelligent AI assistant. I can help you with course information, admission guidance, programming tips, and career advice. How can I assist you today?");
    }, 1000);
});

// Additional Utility Functions
function clearChat() {
    const chatArea = document.getElementById('chatArea');
    const messages = chatArea.querySelectorAll('.message');
    messages.forEach(message => message.remove());
}

// Export functions for potential Python integration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getResponse,
        addMessage,
        sendMessage,
        sendQuick
    };
}