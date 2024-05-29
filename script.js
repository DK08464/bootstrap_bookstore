        document.getElementById('categoryFilter').addEventListener('change', filterBooks);
        document.getElementById('sortFilter').addEventListener('change', sortBooks);

        function filterBooks() {
            var category = document.getElementById('categoryFilter').value;
            var bookCards = document.querySelectorAll('.book-card');
            bookCards.forEach(card => {
                if (category === '' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        function sortBooks() {
            var sortBy = document.getElementById('sortFilter').value;
            var bookCards = Array.from(document.querySelectorAll('.book-card'));
            var container = document.getElementById('bookCards');

            bookCards.sort((a, b) => {
                if (sortBy === 'price-asc') {
                    return a.getAttribute('data-price') - b.getAttribute('data-price');
                } else if (sortBy === 'price-desc') {
                    return b.getAttribute('data-price') - a.getAttribute('data-price');
                } else if (sortBy === 'date') {
                    return new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date'));
                }
                return 0; 
            });

            bookCards.forEach(card => container.appendChild(card));
        }

        document.getElementById('searchForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
            var searchTerm = document.getElementById('searchInput').value.toLowerCase(); 
            var books = document.querySelectorAll('.card'); 
            books.forEach(function(book) {
                var title = book.querySelector('.card-title').innerText.toLowerCase(); 
                if (title.includes(searchTerm)) {
                    book.style.display = 'block'; 
                } else {
                    book.style.display = 'none'; 
                }
            });
        });

        document.getElementById('searchBar').addEventListener('input', function () {
            if (this.value === '') {
                var bookCards = document.querySelectorAll('.book-card');
                bookCards.forEach(card => {
                    card.style.display = 'block';
                });
            }
        });