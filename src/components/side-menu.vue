<template>
  <div class="sidebarMenuWrapper">
    <ul>
      <li>
        <a href="/InvestmentFunds" class="text-xs flex justify-start items-center">
          <span class="block">
            <i class="fas fa-bed"></i>
          </span>Investment Funds
        </a>
      </li>
      <li>
        <a href="/dashboard" class="text-xs flex justify-start items-center">
          <span class="block">
            <i class="fas fa-user-cog"></i>
          </span>Endowmwnts
        </a>
      </li>
      <li>
        <a href="/selectAll" class="text-xs flex justify-start items-center">
          <span class="block">
            <i class="fas fa-user-cog"></i>
          </span>Select All
        </a>
      </li>
      <li>
        <a href="/batchTransection" class="text-xs flex justify-start items-center">
          <span class="block">
            <i class="fas fa-bed"></i>
          </span> Batch Transection
        </a>
      </li>
      <li>
        <a href="/publicProcess" class="text-xs flex justify-start items-center">
          <span class="block">
            <i class="fas fa-user-cog"></i>
          </span>Public Processing
        </a>
      </li>

      <li>
        <span class="block"></span>
        <a class="dropdown">SUPPORT</a>
        <ul>
          <li>
            <a href="/contactUs" class="text-xs flex justify-start items-center">
              <span class="block">
                <i class="fas fa-futbol"></i>
              </span>Contact Us
            </a>
          </li>
          <li>
            <a href="/faq" class="text-xs flex justify-start items-center">
              <span class="block">
                <i class="far fa-question-circle"></i>
              </span>Faq
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
.sidebarMenuWrapper {
  margin-top: 1rem;
  ul {
    li {
      color: #bdc0c7;
      line-height: 1.8rem;
      a {
        span {
          margin-right: 15px;
          svg {
            font-size: 20px;
            width: 15px;
            color: #bdc0c7;
          }
        }
      }
      .dropdown {
        margin-left: -20px;
        padding: 0.4rem 0;
        font-size: 0.7rem;
      }
    }
  }
}
</style>