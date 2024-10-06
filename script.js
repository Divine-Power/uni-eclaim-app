document.addEventListener('DOMContentLoaded', () => {
    const claimList = document.getElementById('claim-list');
    const submitClaimBtn = document.getElementById('submit-claim-btn');
    const claimForm = document.getElementById('claim-form');
    const form = document.getElementById('form');
    const cancelBtn = document.getElementById('cancel-btn');

    const claims = [
        { category: "Travel", amount: 100, description: "Flight to conference", status: "Approved" },
        { category: "Materials", amount: 50, description: "Books", status: "Pending" },
        { category: "Conference", amount: 200, description: "Registration fee", status: "Rejected" }
    ];

    function renderClaims() {
        claimList.innerHTML = '';
        claims.forEach((claim, index) => {
            const claimDiv = document.createElement('div');
            claimDiv.textContent = `${claim.category} - ${claim.amount} - ${claim.description} (${claim.status})`;
            claimList.appendChild(claimDiv);
        });
    }

    submitClaimBtn.addEventListener('click', () => {
        claimForm.classList.remove('hidden');
    });

    cancelBtn.addEventListener('click', () => {
        claimForm.classList.add('hidden');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const category = document.getElementById('category').value;
        const amount = document.getElementById('amount').value;
        const description = document.getElementById('description').value;

        claims.push({ category, amount: parseFloat(amount), description, status: "Pending" });
        form.reset();
        claimForm.classList.add('hidden');
        renderClaims();
        alert('Claim Submitted Successfully');
    });

    renderClaims();
});
