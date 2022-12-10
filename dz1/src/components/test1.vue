<template>
  <div class="container ">
        <form>
            <div class="card m-3 p-3">
                <h4 class="header">
                    Футы в метры
                </h4>
                <div class="row">
                    <div class="col">
                        <p>Футы:</p>
                        <input v-model="foots" @input="foots_changed()" type="text" class="form-control" placeholder="">
                    </div>
                    <div class="col">
                        <p> Метры:</p>
                        <input v-model="meters" @input="meters_changed()" type="text" class="form-control" placeholder="">
                    </div>
                </div>
            </div>

            <div class="card m-3 p-3">
                <h4 class="header">
                    Морские мили в километры
                </h4>
                <div class="row">
                    <div class="col">
                        <p>Морские мили:</p>
                        <input v-model="sea_miles" @input="sea_miles_changed()" type="text" class="form-control" placeholder="">

                    </div>
                    <div class="col">
                        <p>Километры:</p>
                        <input v-model="kilometers" @input="kilometers_changed()" type="text" class="form-control" placeholder="">
                    </div>
                </div>
            </div>
            <div class="card m-3 p-3">
                <h4 class="accordion-header">
                    Градусы в радианы
                </h4>
                <div class="row">
                    <div class="col">
                        <p>Градусы:</p>
                        <input v-model="degrees" @input="degrees_changed()" type="text" class="form-control" placeholder="">

                    </div>
                    <div class="col">
                        <p>Радианы:</p>
                        <input v-model="radians" @input="radians_changed()" type="text" class="form-control" placeholder="">
                    </div>
                </div>
            </div>
            <div class="card m-3 p-3">
                <h4 class="accordion-header">
                    Градусы Цельсия в Фаренгейты
                </h4>
                <div class="row">
                    <div class="col">
                        <p>Градусы Цельсия:</p>
                        <input v-model="celsius" @input="celsius_changed()" type="text" class="form-control" placeholder="">

                    </div>
                    <div class="col">
                        <p>Фаренгейты:</p>
                        <input v-model="farenheit" @input="farenheit_changed()" type="text" class="form-control" placeholder="">
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

export default {
  name: 'TestName',
  data() {
    return {
      //Определяем все необходимые переменные
      foots:0,
      meters:0,
      foot_meter_ratio:0.3048,

      sea_miles:0,
      kilometers:0,
      sea_mile_kilometer_ratio:1.852,

      degrees:0,
      radians:0,
      degree_radian_ratio:0.01745,

      celsius:0,
      farenheit:32,

    }
  },
  methods : {
    //обработка изменения поля с футами
    foots_changed() {
      this.meters = this.foots * this.foot_meter_ratio;
    },
    //обработка изменения поля с метрами
    meters_changed() {
      this.foots = this.meters / this.foot_meter_ratio;
    },

    //обработка изменения поля с морскими милями
    sea_miles_changed() {
      this.kilometers = this.sea_miles * this.sea_mile_kilometer_ratio;
    },
    //обработка изменения поля с километрами
    kilometers_changed() {
      this.sea_miles = this.kilometers / this.sea_mile_kilometer_ratio;
    },

    //обработка изменения поля с градусами
    degrees_changed() {
      this.radians = this.degrees * this.degree_radian_ratio;
    },
    //обработка изменения поля с радианами
    radians_changed() {
      this.degrees = this.radians / this.degree_radian_ratio;
    },

    //обработка изменения поля с цельсиями
    celsius_changed() {
      this.farenheit = this.celsius * (9.0/5.0) + 32;
    },
    //обработка изменения поля с фаренгейтами
    farenheit_changed() {
      this.celsius = (this.farenheit - 32) * (5.0/9.0);
    }

  }
}
</script>>

