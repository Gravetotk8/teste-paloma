const activities = {
    VAN: [
        "Leitura de manuais técnicos de VAN",
        "Acompanhamento das condicionalidades à saúde do programa Bolsa Família",
        "Monitoramento do Sistema de Vigilância Alimentar e Nutricional (SISVAN)",
        "Avaliação do consumo alimentar e estado nutricional da população",
        "Elaboração de relatórios nutricionais",
        "Acompanhamento dos pacientes do programa PANNAE",
        "Monitoramento dos contratos de entrega de materiais"
    ],
    CRIS: [
        "Apoiar na coleta e análise de amostras biológicas",
        "Monitoramento de indicadores nos sistemas de informação",
        "Aconselhamento e testagem para ISTs",
        "Pesquisa epidemiológica de ISTs",
        "Monitoramento da dispensação de medicamentos",
        "Atualização de protocolos de biossegurança"
    ],
    VIGEP: [
        "Monitoramento de doenças: coleta e análise de dados",
        "Investigação epidemiológica de casos e surtos",
        "Monitoramento e notificação de doenças",
        "Participação de comitês de mortalidade",
        "Investigação de óbitos suspeitos",
        "Confecção de boletins epidemiológicos"
    ],
    VISA: [
        "Inspeção sanitária",
        "Elaboração de laudos de inspeção",
        "Envio de relatórios de inspeção",
        "Avaliação e revisão de POPs",
        "Estudo de regulamentações sanitárias"
    ],
    CEREST: [
        "Fiscalização e notificação de acidentes de trabalho",
        "Elaboração de relatórios",
        "Comunicação com órgãos competentes",
        "Monitoramento da saúde dos trabalhadores",
        "Confecção de boletins",
        "Investigação de óbitos por acidentes de trabalho"
    ],
    ZOONOSE: [
        "Análise e monitoramento de surtos",
        "Acompanhamento das ações para a leishmaniose",
        "Notificação de acidentes por animais peçonhentos",
        "Acompanhamento da vacinação animal",
        "Coleta de amostras para o LACEN",
        "Diagnóstico e vigilância entomológica"
    ],
    VISAM: [
        "Realização de fiscalização após denúncias",
        "Coleta e registro de amostras de água",
        "Inspeção e cadastro de formas de abastecimento de água",
        "Participação em ações de vigilância por exposição a agrotóxicos",
        "Gerenciamento de resíduos de serviços de saúde"
    ]
};

function updateActivities() {
    const selectedVigilancia = document.getElementById('vigilancia').value;
    const activitiesContainer = document.getElementById('activities-container');
    const customActivity = document.getElementById('custom-activity');

    document.getElementById('other-activity').value = '';

    activitiesContainer.innerHTML = '';

    if (activities[selectedVigilancia]) {
        activities[selectedVigilancia].forEach(activity => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'activities';
            checkbox.value = activity;
            checkbox.classList.add('form-check-input');
            checkbox.setAttribute('data-bs-toggle', 'tooltip');
            checkbox.setAttribute('title', `Atividade: ${activity}`);

            const label = document.createElement('label');
            label.textContent = activity;
            label.classList.add('form-check-label');

            const div = document.createElement('div');
            div.classList.add('form-check');
            div.appendChild(checkbox);
            div.appendChild(label);

            activitiesContainer.appendChild(div);
        });

        customActivity.classList.remove('hidden');
    } else {
        customActivity.classList.add('hidden');
    }

    initializeTooltips();
}

function initializeTooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeTooltips();
});