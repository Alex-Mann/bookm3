/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface Bookm3Interface extends ethers.utils.Interface {
  functions: {
    "book(address,uint256)": FunctionFragment;
    "bookingsOf(address,uint256)": FunctionFragment;
    "burn(address,address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "refund(address,uint256)": FunctionFragment;
    "release(address,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "book",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bookingsOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "refund",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "book", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bookingsOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "refund", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Booked(address,uint256,uint256)": EventFragment;
    "Burned(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Refunded(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Booked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Burned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Refunded"): EventFragment;
}

export type BookedEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    payee: string;
    endtime: BigNumber;
    weiAmount: BigNumber;
  }
>;

export type BurnedEvent = TypedEvent<
  [string, BigNumber] & { notBribe: string; weiAmount: BigNumber }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RefundedEvent = TypedEvent<
  [string, BigNumber] & { payee: string; weiAmount: BigNumber }
>;

export class Bookm3 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: Bookm3Interface;

  functions: {
    book(
      payee: string,
      endtime: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bookingsOf(
      payee: string,
      endtime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burn(
      notBribe: string,
      payee: string,
      endtime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    refund(
      payee: string,
      endtime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    release(
      payee: string,
      endtime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  book(
    payee: string,
    endtime: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bookingsOf(
    payee: string,
    endtime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    notBribe: string,
    payee: string,
    endtime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  refund(
    payee: string,
    endtime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  release(
    payee: string,
    endtime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    book(
      payee: string,
      endtime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    bookingsOf(
      payee: string,
      endtime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      notBribe: string,
      payee: string,
      endtime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    refund(
      payee: string,
      endtime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    release(
      payee: string,
      endtime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Booked(address,uint256,uint256)"(
      payee?: string | null,
      endtime?: null,
      weiAmount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { payee: string; endtime: BigNumber; weiAmount: BigNumber }
    >;

    Booked(
      payee?: string | null,
      endtime?: null,
      weiAmount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { payee: string; endtime: BigNumber; weiAmount: BigNumber }
    >;

    "Burned(address,uint256)"(
      notBribe?: string | null,
      weiAmount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { notBribe: string; weiAmount: BigNumber }
    >;

    Burned(
      notBribe?: string | null,
      weiAmount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { notBribe: string; weiAmount: BigNumber }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Refunded(address,uint256)"(
      payee?: string | null,
      weiAmount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { payee: string; weiAmount: BigNumber }
    >;

    Refunded(
      payee?: string | null,
      weiAmount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { payee: string; weiAmount: BigNumber }
    >;
  };

  estimateGas: {
    book(
      payee: string,
      endtime: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bookingsOf(
      payee: string,
      endtime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      notBribe: string,
      payee: string,
      endtime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    refund(
      payee: string,
      endtime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    release(
      payee: string,
      endtime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    book(
      payee: string,
      endtime: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bookingsOf(
      payee: string,
      endtime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      notBribe: string,
      payee: string,
      endtime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    refund(
      payee: string,
      endtime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    release(
      payee: string,
      endtime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
