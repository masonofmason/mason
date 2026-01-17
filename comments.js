const commentsData = [
    {
        author: 'Guest',
        date: '2024-01-01',
        text: 'This is the first comment.'
    },
    {
        author: 'Another Guest',
        date: '2024-01-02',
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
        commentsData.forEach(comment => {
            const li = document.createElement('li');
            li.classList.add('comment');
            li.innerHTML = `
                <div class="comment-author">${comment.author}</div>
                <div class="comment-date">${new Date(comment.date).toDateString()}</div>
                <div class="comment-text">${comment.text}</div>
            `;
            commentList.appendChild(li);
        });
    }

    addComment() {
        const authorInput = this.shadowRoot.getElementById('comment-author');
        const textInput = this.shadowRoot.getElementById('comment-text');

        const newComment = {
            author: authorInput.value || 'Anonymous',
            date: new Date().toISOString(),
            text: textInput.value
        };

        if (newComment.text.trim() === '') {
            return;
        }

        commentsData.push(newComment);
        this.renderComments();

        authorInput.value = '';
        textInput.value = '';
    }
}

customElements.define('comment-section', CommentSection);
