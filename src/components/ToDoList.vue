<template>
  <div class="Todo">
    <h1>TodoList</h1>
    <table>
      <thead>
        <th colspan="2">代辦事項</th>
      </thead>
      <tbody v-for="item in items" v-bind:key="item.id">
        <tr>
          <th v-text="item.title"></th>
          <td>
            <button @click="finish(item)" class="button">完成</button>
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    代辦:<input type="text" v-model="newItem" v-on:keyup.enter="add" />
    <button @click="add">新增</button>
  </div>
</template>

<script>
export default {
  name: "ToDoList",
  data() {
    return {
      items: [],
      id: 0,
      same: true,
    };
  },
  methods: {
    finish(completeItem) {
      this.items.map((item, index) => {
        if (item.id === completeItem.id) {
          this.items.splice(index, 1);
        }
      });
    },
    add() {
      if (empty(this.newItem)) {
        window.alert("請輸入內容");
        return;
      }
      this.items.map((item) => {
        if (item.title === this.newItem) {
          window.alert("輸入相同內容!!!");
          this.same = false;
        }
      });
      if (this.same) {
        this.items.push({
          id: this.id,
          title: this.newItem,
        });
        this.id++;
        this.newItem = "";
      }
      this.same = true;
    },
  },
};
</script>  

<style scoped lang="scss">
table {
  margin-left: auto;
  margin-right: auto;
  table-layout: fixed;
  word-break: break-all;
  width: 60%;
  border: 1px solid #333;
}

thead {
  background-color: #333;
  color: #fff;
}
</style>
