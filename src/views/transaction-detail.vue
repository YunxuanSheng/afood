<template>
  <div class="transaction-detail">
    <div class="background"></div>

    <div class="content">
      <div class="header-div">
        <van-row class="header">
          <van-col span="2" class="left-arrow">
            <van-icon name="arrow-left" />
          </van-col>
          <van-col span="22">
            <van-search v-model="value" placeholder="搜索词" class="search" />
          </van-col>
        </van-row>
      </div>
      <van-tabs
        v-model="active"
        class="tabs"
        color="#F4F6FC"
        background="#F4F6FC"
        title-active-color="#005D28"
      >
        <van-tab title="售出提货"> </van-tab>
        <van-tab title="待交易" active="font-size: 18px;">
          <div class="transaction">
            <van-cell class="transaction-header-cell">
              <div class="transaction-header">
                <div class="header-icon">
                  <div class="hotel-icon"><van-icon name="hotel-o" /></div>
                </div>
                <div class="">
                  <div class="customer">
                    <div class="customer-name">杭州市市第七中学</div>
                    <div class="customer-phone">
                      <van-icon name="phone-circle" />
                    </div>
                  </div>
                  <div class="index">订单编号：DX1234567890</div>
                </div>
              </div>
              <div class="transaction-info">
                <van-row>
                  <van-col span="6">
                    <div class="img-div">
                      <img
                        src="@/assets/images/product-image/product2.png"
                        class="product-image"
                      />
                    </div>
                  </van-col>
                  <van-col class="product-info" span="17">
                    <van-row>
                      <van-col span="19">
                        <div class="product-name">
                          乔家大院五常大米描述字段很长的展示方式是换行显示
                        </div>
                      </van-col>
                      <van-col class="product-price" span="5"> ￥35.0 </van-col>
                    </van-row>
                    <van-row>
                      <div class="product-detail">
                        <div class="transport-tag">
                          <van-tag color="#F3F4F5" text-color="#9A9B9D"
                            >支持配送</van-tag
                          >
                        </div>
                        <div class="product-format">规格：5KG</div>
                        <div class="product-amount">数量：10</div>
                      </div>
                    </van-row>
                  </van-col>
                </van-row>
                <van-row>
                  <div class="transaction-status">已配送</div>
                </van-row>
              </div>
              <div class="transaction-info">
                <van-row>
                  <van-col span="6">
                    <div class="img-div">
                      <img
                        src="@/assets/images/product-image/product1.png"
                        class="product-image"
                      />
                    </div>
                  </van-col>
                  <van-col class="product-info" span="17">
                    <van-row>
                      <van-col span="19">
                        <div class="product-name">天然有机绿色食品大米</div>
                      </van-col>
                      <van-col class="product-price" span="5"> ￥35.0 </van-col>
                    </van-row>
                    <van-row>
                      <div class="product-detail">
                        <div class="transport-tag">
                          <van-tag color="#F3F4F5" text-color="#9A9B9D"
                            >支持配送</van-tag
                          >
                        </div>
                        <div class="product-format">规格：5KG</div>
                        <div class="product-amount">数量：10</div>
                      </div>
                    </van-row>
                  </van-col>
                </van-row>
                <van-row>
                  <div class="transaction-status">已自提</div>
                </van-row>
              </div>
            </van-cell>

            <van-cell class="transaction-total-cell">
              <div class="transaction-total">
                <div class="transaction-date">2020/05/21</div>
                <div class="unit-price">单价：￥35.00</div>
                <div class="total-price">总计：￥350.00</div>
              </div>
              <div class="transaction-buttons">
                <van-button class="cancle">关闭交易</van-button>
                <van-button class="complete">完成交易</van-button>
              </div>
            </van-cell>
          </div>

          <div class="transaction">
            <van-cell>
              <div class="transaction-header">
                <div class="header-icon">
                  <div class="hotel-icon"><van-icon name="hotel-o" /></div>
                </div>
                <div class="">
                  <div class="customer">
                    <div class="customer-name">杭州市市第七中学</div>
                    <div class="customer-phone">
                      <van-icon name="phone-circle" />
                    </div>
                  </div>
                  <div class="index">订单编号：DX1234567890</div>
                </div>
              </div>
              <div class="transaction-info">
                <van-row>
                  <van-col span="6">
                    <div class="img-div">
                      <img
                        src="@/assets/images/product-image/product2.png"
                        class="product-image"
                      />
                    </div>
                  </van-col>
                  <van-col class="product-info" span="17">
                    <van-row>
                      <van-col span="19">
                        <div class="product-name">
                          乔家大院五常大米描述字段很长的展示方式是换行显示
                        </div>
                      </van-col>
                      <van-col class="product-price" span="5"> ￥35.0 </van-col>
                    </van-row>
                    <van-row>
                      <div class="product-detail">
                        <div class="transport-tag">
                          <van-tag color="#F3F4F5" text-color="#9A9B9D"
                            >支持配送</van-tag
                          >
                        </div>
                        <div class="product-format">规格：5KG</div>
                        <div class="product-amount">数量：10</div>
                      </div>
                    </van-row>
                  </van-col>
                </van-row>
                <van-row>
                  <div class="transaction-status">已配送</div>
                </van-row>
              </div>
            </van-cell>

            <van-cell class="transaction-total-cell">
              <div class="transaction-total">
                <div class="transaction-date">2020/05/21</div>
                <div class="unit-price">单价：￥35.00</div>
                <div class="total-price">总计：￥350.00</div>
              </div>
              <div class="transaction-buttons">
                <van-button class="cancle">关闭交易</van-button>
                <van-button class="complete">完成交易</van-button>
              </div>
            </van-cell>
          </div>

          <div class="transaction">
            <van-cell>
              <div class="transaction-header">
                <div class="header-icon">
                  <div class="hotel-icon"><van-icon name="hotel-o" /></div>
                </div>
                <div class="">
                  <div class="customer">
                    <div class="customer-name">杭州市市第七中学</div>
                    <div class="customer-phone">
                      <van-icon name="phone-circle" />
                    </div>
                  </div>
                  <div class="index">订单编号：DX1234567890</div>
                </div>
              </div>
              <div class="transaction-info">
                <van-row>
                  <van-col span="6">
                    <div class="img-div">
                      <img
                        src="@/assets/images/product-image/product2.png"
                        class="product-image"
                      />
                    </div>
                  </van-col>
                  <van-col class="product-info" span="17">
                    <van-row>
                      <van-col span="19">
                        <div class="product-name">
                          乔家大院五常大米描述字段很长的展示方式是换行显示
                        </div>
                      </van-col>
                      <van-col class="product-price" span="5"> ￥35.0 </van-col>
                    </van-row>
                    <van-row>
                      <div class="product-detail">
                        <div class="transport-tag">
                          <van-tag color="#F3F4F5" text-color="#9A9B9D"
                            >支持配送</van-tag
                          >
                        </div>
                        <div class="product-format">规格：5KG</div>
                        <div class="product-amount">数量：10</div>
                      </div>
                    </van-row>
                  </van-col>
                </van-row>
                <van-row>
                  <div class="transaction-status">已配送</div>
                </van-row>
              </div>
              <div class="transaction-info">
                <van-row>
                  <van-col span="6">
                    <div class="img-div">
                      <img
                        src="@/assets/images/product-image/product1.png"
                        class="product-image"
                      />
                    </div>
                  </van-col>
                  <van-col class="product-info" span="17">
                    <van-row>
                      <van-col span="19">
                        <div class="product-name">天然有机绿色食品大米</div>
                      </van-col>
                      <van-col class="product-price" span="5"> ￥35.0 </van-col>
                    </van-row>
                    <van-row>
                      <div class="product-detail">
                        <div class="transport-tag">
                          <van-tag color="#F3F4F5" text-color="#9A9B9D"
                            >支持配送</van-tag
                          >
                        </div>
                        <div class="product-format">规格：5KG</div>
                        <div class="product-amount">数量：10</div>
                      </div>
                    </van-row>
                  </van-col>
                </van-row>
                <van-row>
                  <div class="transaction-status">已自提</div>
                </van-row>
              </div>
            </van-cell>

            <van-cell class="transaction-total-cell">
              <div class="transaction-total">
                <div class="transaction-date">2020/05/21</div>
                <div class="unit-price">单价：￥35.00</div>
                <div class="total-price">总计：￥350.00</div>
              </div>
              <div class="transaction-buttons">
                <van-button class="cancle">关闭交易</van-button>
                <van-button class="complete">完成交易</van-button>
              </div>
            </van-cell>
          </div>
        </van-tab>
        <van-tab title="已完成">
          <div class="transaction">
            <van-cell class="transaction-header-cell">
              <div class="transaction-header">
                <div class="header-icon">
                  <div class="hotel-icon"><van-icon name="hotel-o" /></div>
                </div>
                <div class="">
                  <div class="customer">
                    <div class="customer-name">杭州市市第七中学</div>
                    <div class="customer-phone">
                      <van-icon name="phone-circle" />
                    </div>
                  </div>
                  <div class="index">订单编号：DX1234567890</div>
                </div>
              </div>
              <div class="transaction-info">
                <van-row>
                  <van-col span="6">
                    <div class="img-div">
                      <img
                        src="@/assets/images/product-image/product2.png"
                        class="product-image"
                      />
                    </div>
                  </van-col>
                  <van-col class="product-info" span="17">
                    <van-row>
                      <van-col span="19">
                        <div class="product-name">
                          乔家大院五常大米描述字段很长的展示方式是换行显示
                        </div>
                      </van-col>
                      <van-col class="product-price" span="5"> ￥35.0 </van-col>
                    </van-row>
                    <van-row>
                      <div class="product-detail">
                        <div class="transport-tag">
                          <van-tag color="#F3F4F5" text-color="#9A9B9D"
                            >支持配送</van-tag
                          >
                        </div>
                        <div class="product-format">规格：5KG</div>
                        <div class="product-amount">数量：10</div>
                      </div>
                    </van-row>
                  </van-col>
                </van-row>
                <van-row>
                  <div class="transaction-status">已配送</div>
                </van-row>
              </div>
              <div class="transaction-info">
                <van-row>
                  <van-col span="6">
                    <div class="img-div">
                      <img
                        src="@/assets/images/product-image/product1.png"
                        class="product-image"
                      />
                    </div>
                  </van-col>
                  <van-col class="product-info" span="17">
                    <van-row>
                      <van-col span="19">
                        <div class="product-name">天然有机绿色食品大米</div>
                      </van-col>
                      <van-col class="product-price" span="5"> ￥35.0 </van-col>
                    </van-row>
                    <van-row>
                      <div class="product-detail">
                        <div class="transport-tag">
                          <van-tag color="#F3F4F5" text-color="#9A9B9D"
                            >支持配送</van-tag
                          >
                        </div>
                        <div class="product-format">规格：5KG</div>
                        <div class="product-amount">数量：10</div>
                      </div>
                    </van-row>
                  </van-col>
                </van-row>
                <van-row>
                  <div class="transaction-status">已自提</div>
                </van-row>
              </div>
            </van-cell>

            <van-cell class="transaction-total-cell">
              <div class="transaction-total">
                <div class="transaction-date">2020/05/21</div>
                <div class="unit-price">单价：￥35.00</div>
                <div class="total-price">总计：￥350.00</div>
              </div>
            </van-cell>
          </div>

          <div class="transaction">
            <van-cell>
              <div class="transaction-header">
                <div class="header-icon">
                  <div class="hotel-icon"><van-icon name="hotel-o" /></div>
                </div>
                <div class="">
                  <div class="customer">
                    <div class="customer-name">杭州市市第七中学</div>
                    <div class="customer-phone">
                      <van-icon name="phone-circle" />
                    </div>
                  </div>
                  <div class="index">订单编号：DX1234567890</div>
                </div>
              </div>
              <div class="transaction-info">
                <van-row>
                  <van-col span="6">
                    <div class="img-div">
                      <img
                        src="@/assets/images/product-image/product2.png"
                        class="product-image"
                      />
                    </div>
                  </van-col>
                  <van-col class="product-info" span="17">
                    <van-row>
                      <van-col span="19">
                        <div class="product-name">
                          乔家大院五常大米描述字段很长的展示方式是换行显示
                        </div>
                      </van-col>
                      <van-col class="product-price" span="5"> ￥35.0 </van-col>
                    </van-row>
                    <van-row>
                      <div class="product-detail">
                        <div class="transport-tag">
                          <van-tag color="#F3F4F5" text-color="#9A9B9D">
                            支持配送
                          </van-tag>
                        </div>
                        <div class="product-format">规格：5KG</div>
                        <div class="product-amount">数量：10</div>
                      </div>
                    </van-row>
                  </van-col>
                </van-row>
                <van-row>
                  <div class="transaction-status">已配送</div>
                </van-row>
              </div>
            </van-cell>

            <van-cell class="transaction-total-cell">
              <div class="transaction-total">
                <div class="transaction-date">2020/05/21</div>
                <div class="unit-price">单价：￥35.00</div>
                <div class="total-price">总计：￥350.00</div>
              </div>
            </van-cell>
          </div>

          <div class="transaction">
            <van-cell>
              <div class="transaction-header">
                <div class="header-icon">
                  <div class="hotel-icon"><van-icon name="hotel-o" /></div>
                </div>
                <div class="">
                  <div class="customer">
                    <div class="customer-name">杭州市市第七中学</div>
                    <div class="customer-phone">
                      <van-icon name="phone-circle" />
                    </div>
                  </div>
                  <div class="index">订单编号：DX1234567890</div>
                </div>
              </div>
              <div class="transaction-info">
                <van-row>
                  <van-col span="6">
                    <div class="img-div">
                      <img
                        src="@/assets/images/product-image/product2.png"
                        class="product-image"
                      />
                    </div>
                  </van-col>
                  <van-col class="product-info" span="17">
                    <van-row>
                      <van-col span="19">
                        <div class="product-name">
                          乔家大院五常大米描述字段很长的展示方式是换行显示
                        </div>
                      </van-col>
                      <van-col class="product-price" span="5"> ￥35.0 </van-col>
                    </van-row>
                    <van-row>
                      <div class="product-detail">
                        <div class="transport-tag">
                          <van-tag color="#F3F4F5" text-color="#9A9B9D"
                            >支持配送</van-tag
                          >
                        </div>
                        <div class="product-format">规格：5KG</div>
                        <div class="product-amount">数量：10</div>
                      </div>
                    </van-row>
                  </van-col>
                </van-row>
                <van-row>
                  <div class="transaction-status">已配送</div>
                </van-row>
              </div>
              <div class="transaction-info">
                <van-row>
                  <van-col span="6">
                    <div class="img-div">
                      <img
                        src="@/assets/images/product-image/product1.png"
                        class="product-image"
                      />
                    </div>
                  </van-col>
                  <van-col class="product-info" span="17">
                    <van-row>
                      <van-col span="19">
                        <div class="product-name">天然有机绿色食品大米</div>
                      </van-col>
                      <van-col class="product-price" span="5"> ￥35.0 </van-col>
                    </van-row>
                    <van-row>
                      <div class="product-detail">
                        <div class="transport-tag">
                          <van-tag color="#F3F4F5" text-color="#9A9B9D"
                            >支持配送</van-tag
                          >
                        </div>
                        <div class="product-format">规格：5KG</div>
                        <div class="product-amount">数量：10</div>
                      </div>
                    </van-row>
                  </van-col>
                </van-row>
                <van-row>
                  <div class="transaction-status">已自提</div>
                </van-row>
              </div>
            </van-cell>

            <van-cell class="transaction-total-cell">
              <div class="transaction-total">
                <div class="transaction-date">2020/05/21</div>
                <div class="unit-price">单价：￥35.00</div>
                <div class="total-price">总计：￥350.00</div>
              </div>
            </van-cell>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'TransactionDetail',
  data () {
    return {
      value: '',
      active: 'transaction-detail',
      price: 0
    }
  },
  created: {
    // const res = await this.axios.get('xxx', ...)
    // try {const res = await this.axios.get('xxx', ...)} catch(e) {}
    // if (res) {this.price = res.data.price} else {}
    // this.price = res.data.price
  }
}
</script>
<style lang="scss" scoped src='../assets/scss/transaction-detail.scss'>
</style>
