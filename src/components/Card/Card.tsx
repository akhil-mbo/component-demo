import moment from "moment";
import React from "react";

import Icon from "../../Constants/Icon";
import Icons from "../Icons";

import "./Card.scss";

export interface CardProps {
  status: string;
  paidDate: string;
  companyName: string;
  ids: string;
  amount: number;
  startDate: string;
  endDate: string;
  dropDownFunction1?: () => void;
  dropDownFunction2?: () => void;
}

const Card: React.FC<CardProps> = ({
  status,
  paidDate,
  companyName,
  ids,
  amount,
  endDate,
  startDate,
}) => {
  return (
    <div className="card">
      {/* header */}

      <div className="card-header">
        <div className="row">
          <div className="card-header__left">
            <span className="card-header__left__status">{status}</span>
            <span className="card-header__left__payment-date">
              {moment(paidDate).format("DDD")}
            </span>
            <span className="card-header__left__payment-date">|</span>
            <span className="card-header__left__payment-date">
              {moment(paidDate).format("DD")}
            </span>
            <span className="card-header__left__payment-date">|</span>
            <span className="card-header__left__payment-date">
              {moment(paidDate).format("YYYY")}
            </span>
          </div>
          <div className="card-header__right ml-auto">
            <div className="dropdown dropdown-action">
              <a
                aria-expanded="false"
                aria-haspopup="true"
                className="component-action dropdown-toggle"
                data-toggle="dropdown"
                href="#1"
                role="button"
              >
                <Icons name={Icon.THREE_DOTS} />
              </a>
              <ul className="dropdown-menu dropdown-menu-right">
                <li>
                  <a className="dropdown-item" href="#1">
                    See Invoice
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#1">
                    Download
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* body */}

      <div className="card-body">
        <div className="row">
          <h3 className="card-body__title">{companyName}</h3>
        </div>
        <div className="row">
          <span className="card-body__job-id">
            Job ID: <span className="card-body__job-id__ids">{ids}</span>
          </span>
        </div>
      </div>

      {/* footer */}

      <div className="card-footer">
        <div className="row">
          <div className="col-7">
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <span className="card-footer__start-date">Start date</span>
                </div>
                <div className="row">
                  <span className="card-footer__date">
                    {moment(startDate).format("MMM")}{" "}
                  </span>
                  <span className="card-footer__date">| </span>
                  <span className="card-footer__date">
                    {" "}
                    {moment(startDate).format("DD")}{" "}
                  </span>
                  <span className="card-footer__date">| </span>
                  <span className="card-footer__date">
                    {" "}
                    {moment(startDate).format("YYYY")}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <span className="card-footer__start-date">End date</span>
                </div>
                <div className="row">
                  <span className="card-footer__date">
                    {" "}
                    {moment(endDate).format("MMM")}
                  </span>
                  <span className="card-footer__date">|</span>
                  <span className="card-footer__date">
                    {" "}
                    {moment(endDate).format("DD")}
                  </span>
                  <span className="card-footer__date">|</span>
                  <span className="card-footer__date">
                    {" "}
                    {moment(endDate).format("YYYY")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="row">
              <span className="card-footer__total ml-auto">Total</span>
            </div>
            <div className="row">
              <span className="card-footer__amount ml-auto">$ {amount}</span>
              <span className="card-footer__currency mr-0"> USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
