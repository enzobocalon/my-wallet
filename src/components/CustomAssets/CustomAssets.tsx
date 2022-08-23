import React from 'react'
import * as S from './style'

import {BiEuro, BiPound} from 'react-icons/bi'
import {BsCashCoin} from 'react-icons/bs'
import {MdAddCircle} from 'react-icons/md'
import {SiBitcoin, SiEthereum} from 'react-icons/si'

const CustomAssets = () => {
  return (
    <S.Container>
        <h1>Other Currencies</h1>
        <span>This assets does not count towards your main balance!</span>
        <S.AssetContainer>
          <S.Assets>
          <div>
            <BsCashCoin size={20}/>
            Currency
          </div>
          <div>
            <span>Amount</span>
            <MdAddCircle size={20} id='kpl'/>
          </div>
          </S.Assets>

            <S.Asset>
              <div>
                <BiEuro size={20}/>
                <span>EUR</span>
              </div>
              <div>
                <span>4500</span>
                <MdAddCircle size={20} className='add'/>
              </div>
            </S.Asset>

            <S.Asset>
              <div>
                <BiPound size={20}/>
                <span>GBP</span>
              </div>
              <div>
                <span>2000</span>
                <MdAddCircle size={20} className='add'/>
              </div>
            </S.Asset>

            <S.Asset>
              <div>
                <SiBitcoin size={20}/>
                <span>BTC</span>
              </div>
              <div>
                <span>0.1</span>
                <MdAddCircle size={20} className='add'/>
              </div>
            </S.Asset>

            <S.Asset>
              <div>
                <SiEthereum size={20}/>
                <span>ETH</span>
              </div>
              <div>
                <span>1.4</span>
                <MdAddCircle size={20} className='add'/>
              </div>
            </S.Asset>

        </S.AssetContainer>
    </S.Container>
  )
}

export default CustomAssets