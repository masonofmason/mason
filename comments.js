// Load comments from localStorage or use default data if none exist
let commentsData = JSON.parse(localStorage.getItem('commentsData')) || [
    {
        author: 'Guest',
        date: '2024-01-01T12:00:00.000Z',
        text: 'This is the first comment.'
    },
    {
        author: 'Another Guest',
        date: '2024-01-02T13:30:00.000Z',
        text: 'This is the second comment.'
    }
];

class CommentSection extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="comments.css">
            <section class="comment-section">
                <h2>Comments</h2>
                <div class="comment-form">
                    <input type="text" id="comment-author" placeholder="Your name" />
                    <textarea id="comment-text" placeholder="Leave a comment"></textarea>
                    <button id="submit-comment">Submit</button>
                </div>
                <ul class="comment-list"></ul>
            </section>
        `;

        this.renderComments();
        this.shadowRoot.getElementById('submit-comment').addEventListener('click', this.addComment.bind(this));
    }

    renderComments() {
        const commentList = this.shadowRoot.querySelector('.comment-list');
        commentList.innerHTML = '';
        // Sort comments by date, newest first
        const sortedComments = [...commentsData].sort((a, b) => new Date(b.date) - new Date(a.date));
        sortedComments.forEach(comment => {
            const li = document.createElement('li');
            li.classList.add('comment');
            // Format date for better readability
            const formattedDate = new Date(comment.date).toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            li.innerHTML = `
                <div class="comment-author">${comment.author}</div>
                <div class="comment-date">${formattedDate}</div>
                <div class="comment-text">${comment.text}</div>
            `;
            commentList.appendChild(li);
        });
    }

    addComment() {
        const authorInput = this.shadowRoot.getElementById('comment-author');
        const textInput = this.shadowRoot.getElementById('comment-text');

        const newComment = {
            author: authorInput.value.trim() || 'Anonymous',
            date: new Date().toISOString(),
            text: textInput.value.trim()
        };

        if (newComment.text === '') {
            alert('Comment cannot be empty!');
            return;
        }

        commentsData.push(newComment);
        localStorage.setItem('commentsData', JSON.stringify(commentsData)); // Save to localStorage
        this.renderComments();

        authorInput.value = '';
        textInput.value = '';
    }
}

customElements.define('comment-section', CommentSection);
