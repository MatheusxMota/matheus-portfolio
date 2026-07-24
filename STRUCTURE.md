# Estrutura do Projeto

## PASSO 1: Camada de Dados (Fundação)
- **Models:** `portfolio.models.ts`
- **Data Mock:** `portfolio-data.ts`

## PASSO 2: Utilitários & UI Base (Átomos / Compartilhados)
- **Directive:** `appReveal` (IntersectionObserver)
- **UI Components:** Tag, Card, SocialLink
- **Icon Component:** `app-icon`

## PASSO 3: Seções da Página (Moléculas / Organismos)
- **Hero:** (com o editor de código + Signals)
- **About:** (sobre mim)
- **Experience:** (timeline)
- **Projects:** (projetos)
- **Stack:** (tecnologias)
- **Contact:** (contato)

## PASSO 4: Layout & Shell (Integração Final)
- **Header:** (menu + signal do mobile)
- **Footer:**
- **AppComponent:** (junta Header + Seções + Footer)
