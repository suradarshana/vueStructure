<template>
  <div class="EndowmwntsManag h-full">
    <div class="EndowmwntsManag__head flex justify-between items-center">
      <div class="EndowmwntsManag__head__title flex justify-start items-center">
        <span class="dollarIcon text-xs flex justify-center items-center rounded-full text-white">
          <i class="fas fa-dollar-sign"></i>
        </span>
        <h2 class="text-xs font-semibold text-black">Title like investment fund</h2>
      </div>
      <div class="EndowmwntsManag__head__pageMenu flex justify-start items-center">
        <div class="EndowmwntsManag__head__pageMenu__text">
          <p class="text-xs">
            Your Data will be
            <a href="#" class="text-xs">handled with care</a>
          </p>
        </div>
        <div class="EndowmwntsManag__head__pageMenu__button">
          <button class="rounded text-xs">New Found</button>
        </div>
        <div class="EndowmwntsManag__head__pageMenu__menuIcon cursor-pointer">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </div>
    <div class="EndowmwntsManag__pageContaint">
      <tabs :options="{ useUrlFragment: false }" @clicked="tabClicked" @changed="tabChanged">
        <tab name="investment Fund">
          <div class="tab-containt">
            <table class="table-fixed w-full text-left text-xs">
              <thead>
                <tr>
                  <th class="w-1/5 py-4 font-semibold">investment Fund</th>
                  <th class="w-1/5 py-4 font-semibold">Code</th>
                  <th class="w-1/5 py-4 font-semibold">investment Income Clearing</th>
                  <th class="w-1/5 py-4 font-semibold">Endowment Balence Clearing</th>
                  <th class="w-1/5 py-4 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border-b py-4  text-gray-500">Johe doe</td>
                  <td class="border-b py-4  text-gray-500">jone.doe@domain.tld</td>
                  <td class="border-b py-4  text-gray-500">450-000</td>
                  <td class="border-b py-4  text-gray-500">450-000</td>
                  <td class="border-b py-4  text-gray-500 text-right">active</td>
                </tr>
                <tr>
                  <td class="border-b py-4  text-gray-500">Johe doe</td>
                  <td class="border-b py-4  text-gray-500">jone.doe@domain.tld</td>
                  <td class="border-b py-4  text-gray-500">450-000</td>
                  <td class="border-b py-4  text-gray-500">450-000</td>
                  <td class="border-b py-4  text-gray-500 text-right">active</td>
                </tr>
                <tr>
                  <td class="border-b py-4  text-gray-500">Johe doe</td>
                  <td class="border-b py-4  text-gray-500">jone.doe@domain.tld</td>
                  <td class="border-b py-4  text-gray-500">450-000</td>
                  <td class="border-b py-4  text-gray-500">450-000</td>
                  <td class="border-b py-4  text-gray-500 text-right">active</td>
                </tr>
                <tr>
                  <td class="border-b py-4  text-gray-500">Johe doe</td>
                  <td class="border-b py-4  text-gray-500">jone.doe@domain.tld</td>
                  <td class="border-b py-4  text-gray-500">450-000</td>
                  <td class="border-b py-4  text-gray-500">450-000</td>
                  <td class="border-b py-4  text-gray-500 text-right">active</td>
                </tr>
                 <tr>
                  <td class="border-b py-4  text-gray-500">Johe doe</td>
                  <td class="border-b py-4  text-gray-500">jone.doe@domain.tld</td>
                  <td class="border-b py-4  text-gray-500">450-000</td>
                  <td class="border-b py-4  text-gray-500">450-000</td>
                  <td class="border-b py-4  text-gray-500 text-right">active</td>
                </tr>
                 <tr>
                  <td class="border-b py-4  text-gray-500">Johe doe</td>
                  <td class="border-b py-4  text-gray-500">jone.doe@domain.tld</td>
                  <td class="border-b py-4  text-gray-500">450-000</td>
                  <td class="border-b py-4  text-gray-500">450-000</td>
                  <td class="border-b py-4  text-gray-500 text-right">active</td>
                </tr>
                 <tr>
                  <td class="border-b py-4  text-gray-500">Johe doe</td>
                  <td class="border-b py-4  text-gray-500">jone.doe@domain.tld</td>
                  <td class="border-b py-4  text-gray-500">450-000</td>
                  <td class="border-b py-4  text-gray-500">450-000</td>
                  <td class="border-b py-4  text-gray-500 text-right">active</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </tab>
        <tab name="investment Fond 1">This is the content of the second tab</tab>
      </tabs>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.EndowmwntsManag {
  &__head {
    &__title {
      span {
        width: 28px;
        height: 28px;
        background: #1c6efc;
        box-shadow: 0px 0px 8px #dedada;
      }

      h2 {
        margin-left: 0.5rem;
      }
    }
    &__pageMenu {
      &__text {
        p {
          a {
            color: #1c6efc;
          }
        }
      }

      &__button {
        button {
          background: #1c6efc;
          color: #fff;
          border-radius: 4px;
          margin-left: 0.5rem;
          padding: 0.35rem 1rem;
        }
      }

      &__menuIcon {
        padding: 0.2rem 0.5rem;
        background: #fff;
        margin-left: 0.5rem;
        box-shadow: 0px 0px 6px #d5d7d9;
        border-radius: 3px;
        color: #8a8f9c;
      }
    }
  }

  &__pageContaint {
    background: #fff;
    margin-top: 1.5rem;
    height: calc(100% - 63px);
    box-shadow: 0px 0px 8px #dedada;
    border-radius: 4px;
  }
}
</style>