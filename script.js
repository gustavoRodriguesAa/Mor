document.addEventListener('DOMContentLoaded', function() {
    const photo = document.getElementById('photo');
    const message = document.getElementById('message');
    const playButton = document.getElementById('playMusic');
    const audio = document.getElementById('backgroundMusic');

    // Função para mostrar mensagem ao clicar na foto
    photo.addEventListener('click', function() {
        message.classList.toggle('show');
    });

    // Função para tocar/pausar música
    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = 'Pausar Música';
            showMusicMessage();
            photo.classList.add('spinning');
        } else {
            audio.pause();
            playButton.textContent = 'Tocar Música';
            photo.classList.remove('spinning');
        }
    });

    function showMusicMessage() {
        const musicMessage = document.createElement('p');
        musicMessage.id = 'musicMessage';
        musicMessage.innerHTML = '"Amor, só queria te lembrar do quanto você é especial pra mim. Estar com você deixa meus dias mais leves, meu sorriso mais fácil e meu coração em paz. Eu amo cada detalhe seu, cada jeito, cada momento que a gente compartilha. Obrigado por ser quem você é e por caminhar comigo. Te amo mais do que consigo colocar em palavras."';
        musicMessage.style.fontSize = '1.2em';
        musicMessage.style.margin = '20px 0';
        musicMessage.style.color = '#ff69b4';
        musicMessage.style.fontWeight = 'bold';
        musicMessage.style.opacity = '0';
        musicMessage.style.transition = 'opacity 0.5s ease';
        document.querySelector('.container').appendChild(musicMessage);
        setTimeout(() => {
            musicMessage.style.opacity = '1';
        }, 100);
    }

    // Animação adicional para a foto
    photo.addEventListener('mouseenter', function() {
        photo.style.transform = 'scale(1.1) rotate(5deg)';
    });

    photo.addEventListener('mouseleave', function() {
        photo.style.transform = 'scale(1) rotate(0deg)';
    });
});
