const stories = [
    {
        title: "Birth in Mecca",
        date: "570 CE",
        content: "Prophet Muhammad (ﷺ) was born in the year 570 CE in the city of Mecca. His father Abdullah had passed away before his birth, and he was raised by his mother Amina and later by his grandfather Abdul-Muttalib.",
        verse: {
            arabic: "أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ ﴿٦﴾ وَوَجَدَكَ ضَالًّا فَهَدَىٰ ﴿٧﴾ وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ ﴿٨﴾",
            translation: "Did He not find you an orphan and give [you] refuge? And He found you lost and guided [you], And He found you poor and made [you] self-sufficient. (Surah Ad-Duha, 93:6-8)"
        }
    },
    {
        title: "First Revelation",
        date: "610 CE",
        content: "At the age of 40, while meditating in the Cave of Hira, Muhammad (ﷺ) received his first revelation from Allah through the Angel Jibreel (Gabriel). This marked the beginning of his prophethood.",
        verse: {
            arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ﴿١﴾ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ﴿٢﴾ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ﴿٣﴾ الَّذِي عَلَّمَ بِالْقَلَمِ ﴿٤﴾ عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ ﴿٥﴾",
            translation: "Read in the name of your Lord who created - Created man from a clinging substance. Read, and your Lord is the most Generous - Who taught by the pen - Taught man that which he knew not. (Surah Al-Alaq, 96:1-5)"
        }
    },
    {
        title: "Migration to Medina",
        date: "622 CE",
        content: "Facing persecution in Mecca, the Prophet (ﷺ) and his followers migrated to Medina. This event, known as the Hijra, marks the beginning of the Islamic calendar.",
        verse: {
            arabic: "إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا ۖ فَأَنزَلَ اللَّهُ سَكِينَتَهُ عَلَيْهِ وَأَيَّدَهُ بِجُنُودٍ لَّمْ تَرَوْهَا وَجَعَلَ كَلِمَةَ الَّذِينَ كَفَرُوا السُّفْلَىٰ ۗ وَكَلِمَةُ اللَّهِ هِيَ الْعُلْيَا ۗ وَاللَّهُ عَزِيزٌ حَكِيمٌ ﴿٤٠﴾",
            translation: "If you do not aid the Prophet - Allah has already aided him when those who disbelieved had driven him out [of Makkah]... (Surah At-Tawbah, 9:40)"
        }
    },
    {
        title: "Conquest of Mecca",
        date: "630 CE",
        content: "After years of conflict, the Prophet (ﷺ) returned to Mecca peacefully with 10,000 followers. He forgave his former enemies and established Islam throughout the region.",
        verse: {
            arabic: "إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا ﴿١﴾",
            translation: "Indeed, We have given you a clear conquest... (Surah Al-Fath, 48:1)"
        }
    }
];

const quizQuestions = [
    {
        question: "Where was Prophet Muhammad (ﷺ) born?",
        options: ["Medina", "Mecca", "Taif", "Jerusalem"],
        answer: "Mecca"
    },
    {
        question: "At what age did the Prophet receive his first revelation?",
        options: ["25", "30", "40", "45"],
        answer: "40"
    },
    {
        question: "What is the name of the cave where the first revelation was received?",
        options: ["Hira", "Thawr", "Uhud", "Safa"],
        answer: "Hira"
    }
];


const timeline = document.getElementById('timeline');
stories.forEach((story, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
    timelineItem.innerHTML = `
        <div class="timeline-content">
            <h3>${story.title}</h3>
            <p>${story.date}</p>
            ${story.verse ? `
                <div class="quran-verse">
                    <div class="arabic">${story.verse.arabic}</div>
                    <div class="translation">${story.verse.translation}</div>
                </div>
            ` : ''}
        </div>
    `;
    timelineItem.addEventListener('click', () => showStory(story));
    timeline.appendChild(timelineItem);
});


const quizContainer = document.getElementById('quizQuestions');
quizQuestions.forEach((q, i) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    questionDiv.innerHTML = `
        <p>${i + 1}. ${q.question}</p>
        ${q.options.map(opt => `
            <label class="quiz-option">
                <input type="radio" name="q${i}" value="${opt}">
                ${opt}
            </label>
        `).join('')}
    `;
    quizContainer.appendChild(questionDiv);
});

function submitQuiz() {
    let score = 0;
    quizQuestions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        }
    });
    const result = document.getElementById('quizResult');
    result.textContent = `You scored ${score} out of ${quizQuestions.length}!`;
    result.style.color = score === quizQuestions.length ? 'green' : 'red';
}
const modal = document.getElementById('storyModal');
const closeBtn = document.querySelector('.close-btn');

function showStory(story) {
    document.getElementById('modalTitle').textContent = story.title;
    document.getElementById('modalDate').textContent = story.date;
    document.getElementById('modalContent').textContent = story.content;
    modal.style.display = 'block';
}


closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => {
    if (e.target == modal) modal.style.display = 'none';
}


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.style.display = 'none';
});