# Diagrama de Caso de Uso (Atividade - Aula Assíncrona)

## 📌 Objetivo da Atividade

Compreender o que é um diagrama de caso de uso e como utilizá-lo para representar um sistema de forma visual.

---

# 🧠 O que é um Diagrama de Caso de Uso

Um diagrama de caso de uso é uma forma de representar:

- quem usa o sistema  
- o que pode ser feito dentro dele  

👉 É uma visão simples e visual do sistema.

---

# 🎯 Para que serve

- facilitar o entendimento  
- melhorar a comunicação  
- organizar o sistema  
- transformar texto em visual  

---

# 👤 Ator

Ator é quem interage com o sistema.

Pode ser:

- uma pessoa  
- outro sistema  

### Exemplos

- Cliente  
- Administrador  

---

## 🖼️ Representação do Ator

<img width="193" height="275" alt="image" src="https://github.com/user-attachments/assets/ee86b8d3-f3b9-4964-9096-eae027d5b4b7" />


---

# ⚙️ Caso de Uso

Caso de uso é uma ação que pode ser realizada no sistema.

👉 Sempre vem de um requisito funcional.

### Exemplos

- Fazer login  
- Comprar produto  
- Cadastrar produto  

---

## 🖼️ Representação do Caso de Uso

<img width="457" height="283" alt="image" src="https://github.com/user-attachments/assets/1584d527-088e-4606-baf5-dab4b899371b" />


---

# 🔐 Permissões (Ligação entre ator e ação)

Nem todo ator pode fazer tudo.

Cada ator tem suas ações específicas.

### Exemplo (Loja Virtual)

Cliente:
- comprar produto  

Administrador:
- cadastrar produto  

👉 Isso representa as permissões do sistema.

---

## 🖼️ Representação da Ligação

<img width="635" height="464" alt="image" src="https://github.com/user-attachments/assets/0297806d-9b9d-41d4-9575-fd21fe8de5a9" />


---

# 🔗 `<<include>>` (Sempre acontece)

Representa uma ação que sempre faz parte de outra.

👉 É obrigatório.

### Exemplo

Finalizar compra  
→ `<<include>>` Validar pagamento  

👉 Toda compra precisa validar pagamento.

---

## 🖼️ Representação do Include

<img width="807" height="181" alt="image" src="https://github.com/user-attachments/assets/84c20eb6-9872-46b2-8b4b-6f38017931e5" />


---

# 🔀 `<<extend>>` (Às vezes acontece)

Representa uma ação opcional.

👉 Pode ou não acontecer.

### Exemplo

Finalizar compra  
← `<<extend>>` Aplicar cupom  

👉 Nem toda compra usa cupom.

---

## 🖼️ Representação do Extend

<img width="851" height="360" alt="image" src="https://github.com/user-attachments/assets/2ee111e3-c246-4620-b354-7db528f63d76" />


---

# ⚠️ Resumo Importante

- Ator → quem usa o sistema  
- Caso de uso → o que é feito  
- Ligação → quem faz o quê  
- `<<include>>` → sempre acontece  
- `<<extend>>` → às vezes acontece  

---

# 📝 ATIVIDADE

## 🎯 Objetivo

Criar um diagrama de caso de uso do sistema desenvolvido pelo grupo.

---

## 📌 Instruções

Utilize o sistema que o seu grupo vem desenvolvendo nas aulas anteriores.
Sugestão de ferramenta: draw.io

---

## O diagrama deve conter:

- pelo menos 2 atores  
- casos de uso bem definidos  
- ligações corretas entre ator e ação  
- pelo menos 1 `<<include>>`  
- pelo menos 1 `<<extend>>`  

---

## 💡 Dicas

- use os requisitos funcionais como base  
- pense: “quem faz isso?”  
- pense: “isso sempre acontece ou só às vezes?”  

---

## 📤 Entrega

Enviar o diagrama por e-mail:

📧 prof.lebc@gmail.com

---

## 📅 Prazo

23:59 de domingo 05/04

---

## 🧠 Dica Final

O objetivo não é perfeição.

👉 É entender como representar um sistema de forma visual.
