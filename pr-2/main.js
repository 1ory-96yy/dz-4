window.addEventListener('load', () => {
            const form = document.getElementById("form1");

            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const login = document.getElementById("login").value;
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
                const confirmPassword = document.getElementById("passwordConfirm").value;
                if (email.includes("@")&&email.includes(".")) {
                if (password === confirmPassword) {
                    alert(`На твій email ${email} було надіслано листа з підтвердженням реєстрації.`);
                } else {
                    alert(`Паролі не співпадають.`);
                }
                } else {
                alert(`Невірний формат електронної пошти.`);
                }
            });
        });
