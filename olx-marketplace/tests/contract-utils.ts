import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  BatchMetadataUpdate,
  ChaiBought,
  Donation,
  ListingPriceUpdated,
  MarketItemCreated,
  MarketSale,
  MetadataUpdate,
  TokenResold,
  Transfer
} from "../generated/Contract/Contract"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBatchMetadataUpdateEvent(
  _fromTokenId: BigInt,
  _toTokenId: BigInt
): BatchMetadataUpdate {
  let batchMetadataUpdateEvent = changetype<BatchMetadataUpdate>(newMockEvent())

  batchMetadataUpdateEvent.parameters = new Array()

  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_fromTokenId",
      ethereum.Value.fromUnsignedBigInt(_fromTokenId)
    )
  )
  batchMetadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_toTokenId",
      ethereum.Value.fromUnsignedBigInt(_toTokenId)
    )
  )

  return batchMetadataUpdateEvent
}

export function createChaiBoughtEvent(
  name: string,
  message: string,
  timestamp: BigInt,
  buyer: Address,
  amount: BigInt
): ChaiBought {
  let chaiBoughtEvent = changetype<ChaiBought>(newMockEvent())

  chaiBoughtEvent.parameters = new Array()

  chaiBoughtEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  chaiBoughtEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )
  chaiBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  chaiBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  chaiBoughtEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return chaiBoughtEvent
}

export function createDonationEvent(
  from: Address,
  name: string,
  message: string,
  timestamp: BigInt,
  amount: BigInt
): Donation {
  let donationEvent = changetype<Donation>(newMockEvent())

  donationEvent.parameters = new Array()

  donationEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  donationEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  donationEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )
  donationEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  donationEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donationEvent
}

export function createListingPriceUpdatedEvent(
  newPrice: BigInt
): ListingPriceUpdated {
  let listingPriceUpdatedEvent = changetype<ListingPriceUpdated>(newMockEvent())

  listingPriceUpdatedEvent.parameters = new Array()

  listingPriceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newPrice",
      ethereum.Value.fromUnsignedBigInt(newPrice)
    )
  )

  return listingPriceUpdatedEvent
}

export function createMarketItemCreatedEvent(
  tokenId: BigInt,
  seller: Address,
  owner: Address,
  price: BigInt,
  sold: boolean
): MarketItemCreated {
  let marketItemCreatedEvent = changetype<MarketItemCreated>(newMockEvent())

  marketItemCreatedEvent.parameters = new Array()

  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("sold", ethereum.Value.fromBoolean(sold))
  )

  return marketItemCreatedEvent
}

export function createMarketSaleEvent(
  tokenId: BigInt,
  buyer: Address,
  seller: Address,
  price: BigInt
): MarketSale {
  let marketSaleEvent = changetype<MarketSale>(newMockEvent())

  marketSaleEvent.parameters = new Array()

  marketSaleEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  marketSaleEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  marketSaleEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  marketSaleEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return marketSaleEvent
}

export function createMetadataUpdateEvent(_tokenId: BigInt): MetadataUpdate {
  let metadataUpdateEvent = changetype<MetadataUpdate>(newMockEvent())

  metadataUpdateEvent.parameters = new Array()

  metadataUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return metadataUpdateEvent
}

export function createTokenResoldEvent(
  tokenId: BigInt,
  seller: Address,
  owner: Address,
  price: BigInt
): TokenResold {
  let tokenResoldEvent = changetype<TokenResold>(newMockEvent())

  tokenResoldEvent.parameters = new Array()

  tokenResoldEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  tokenResoldEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  tokenResoldEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  tokenResoldEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return tokenResoldEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
