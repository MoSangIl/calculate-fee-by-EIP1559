# calculate-fee-by-EIP1559

## EIP1599

### Pre-Problem

기존 수수료 정책은 User들이 더 높은 가스비용을 지불하여, 더 빠른 트랜젝션 처리를 하도록 되어 있으므로 특정 시기에 트랜젝션을 먼저 통과하기 위한 수수료 경쟁이 일어났고 이는 Gas 비의 큰 변동폭을 야기 했다.

### Point

- 블록사이즈에 대한 조정
- 채굴자에 대한 보상이 줄어들고, 해당 보상은 소각됨

→ 업데이트 이후 가스비 산정 기준점이 잡히면서, 수동으로 설정해야 했던 부분이 사라졌다.

### Solution

→ 일시적인 정체에 대처하기 위해 블록 크기를 동적으로 확장/축소하는, 블록당 고정 네트워크 요금을 포함하는 트랜젝션 가격 책정 메커니즘

트랜젝션 처리량에 따라, 블록 사이즈를 확장 축소 하여, gas fee에 대한 급격한 변동을 줄인다.

- 기존에 채굴자에게 주어진 base fee 보상은, 채굴자가 임의로 높게 받는 것을 막기 위해 소각시킨다.
- base fee = protocol에서 제안하는 비용 = 고정 네트워크 비용
- 채굴자에게는 tip 을 보상으로 제공한다.
- GAS_PREMEUM: serves as a “tip”
- FEECAP : 트랜젝션 sender가 원하는 최대 가스 비용

## Gas Fee Calculate Formula

$Gas Fee = GAS LIMIT * (BASE\ FEE\ + \ PRIORITY\ FEE\ )$

## Base Fee Calculate Formula

$BaseFee_{N} = BaseFee_{N-1} + BaseFee_{N-1} * (BaseFeeRatio_{N-1} - 50) * \frac{0.25}{100}$

## Demo

![demo](https://github.com/MoSangIl/calculate-fee-by-EIP1559/assets/45113627/41150d68-d119-495f-9f00-4de0e737337d)
