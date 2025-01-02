document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.dynamic-island-button');
    buttons.forEach((button, index) => {
        button.setAttribute('data-target', `child-element-for-row-dynamic-island-cmd-${index}`);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.dynamic-island-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetIdParts = targetId.split('-');
            const lastItem = targetIdParts[targetIdParts.length - 1];
            const targetElements = document.querySelectorAll('.child-element-for-row-dynamic-island-cmd');
            const targetElement = targetElements[lastItem];
            targetElements.forEach((element, idx) => {
                if (element !== targetElement) {
                    element.classList.add('hidden-child-element-for-row-dynamic-island-cmd');
                }
            });
            if (targetElement) {
                targetElement.classList.remove('hidden-child-element-for-row-dynamic-island-cmd');
            }
        });
    });
});