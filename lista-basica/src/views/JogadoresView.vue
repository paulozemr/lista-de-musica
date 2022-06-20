<script>
import { v4 as uuid } from "uuid";
export default {
  data() {
    return {
      nova_atividade: "",
      nova_materia: "",
      peso_atividade: "",
      professor:"",
      jogadores: [
        { id: 1, materia: "Matematica", peso_atividade: "10", atividade: "", professor: "Clodoaldo" },
        { id: 2, materia: "Portugues", peso_atividade: "7", atividade: "", professor: "Renilse" },
        { id: 3, materia: "Geografia", peso_atividade: "3", atividade: "", professor: "Luiz" },
        { id: 4, materia: "DevWeb", peso_atividade: "6", atividade: "", professor: "Eduardo" },
      ],
    };
  },
  methods: {
    salvar() {
     if (this.nova_materia !== "") {
      const id = uuid();
      this.jogadores.push({
        id: id,
        materia: this.nova_materia,
        atividade: this.nova_atividade,
        peso_atividade: this.peso_atividade,
        professor: this.professor,
      });
      this.nova_materia = "";
      this.nova_atividade = "";
      this.peso_atividade = "";
      this.professor = "";
      } else {
      alert("Informe as coisas!") 
      } 
     },
   excluir(jogador) {
      const indice = this.jogadores.indexOf(jogador);
      this.jogadores.splice(indice, 1);
    },
},
};
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Lista de atividades</h2>
      </div>
      <div class="form-input">
        <input type="text" name="" id="" placeholder="Materia" v-model="nova_materia" />
        <input type="number" name="" id="" placeholder="Peso da atividade" v-model="peso_atividade" />
        <input type="text" name="" id="" placeholder="Atividade" v-model="nova_atividade" />
        <input type="text" name="" id="" placeholder="Professor da Atividade" v-model="professor" />
        <button @click="salvar">Salvar</button>
      </div>
      <div class="list-times">
        <table>
          <thead>
            <tr>
              <th>Materia</th>
              <th>Qual Peso da atividade?</th>
              <th>Atividade</th>
              <th>Data de Entrega</th>
              <th>Professor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="jogador in jogadores" :key="jogador.id">
              <th>{{ jogador.materia }}</th>
              <th>{{ jogador.peso_atividade }}</th>
              <th>{{  jogador.nova_atividade  }}</th>
              <th><input type="date"/></th>
             <th>{{ jogador.professor }}</th>
             <th><button @click="excluir">Excluir</button></th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<style scoped>
.title {
  text-align: center;
  margin: 2rem 0;
}
.form-input {
  display: flex;
  justify-content: center;
}
.form-input input {
  width: 15%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0 0.5rem;
  height: 35px;
}
.form-input button {
  height: 40px;
  margin-left: 1%;
  background-color: rgb(71, 11, 103);
  font-weight: bold;
  color: white;
  border-radius: 10px;
  width: 10%;
  transition: 0.25s;
  border: 0px;
}
.list-times {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
table {
  width: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(0, 0, 0) 0px 0px 0px 3px;
  border-collapse: collapse;
  text-align: center;
}
table thead {
  background-color: rgb(0, 0, 0);
  color: white;
}
table thead th {
  font-weight: bolder;
}
table tbody tr:nth-child(odd) {
  background-color: rgb(92, 133, 18);
  color: white;
}
</style>
