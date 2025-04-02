function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');

    menu.classList.toggle('hidden');

    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');

    // Atualiza aria-expanded
    const isExpanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', !isExpanded);
}
