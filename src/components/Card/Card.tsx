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
    <div className="card mbo-card">
      {/* header */}
      <div className="card-body">
        <header>
          <div className="d-flex">
            <div className="mbo-card__payment">
              <span className="mbo-card__payment-status mbo-card__payment-status--paid">
                {status}
              </span>
              <time>
                <span className="mbo-card__date-value">
                  {moment(paidDate).format("DDD")}
                </span>
                <span className="mbo-card__date-divider">|</span>
                <span className="mbo-card__date-value">
                  {moment(paidDate).format("DD")}
                </span>
                <span className="mbo-card__date-divider">|</span>
                <span className="mbo-card__date-value">
                  {moment(paidDate).format("YYYY")}
                </span>
              </time>
            </div>
            <div className="card_menu ml-auto">
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
        </header>

        {/* body */}

        <main>
          <h3 className="mbo-card__client-name">{companyName}</h3>
          <span className="cmbo-card__lient-id-label">
            Job ID: <span className="mbo-card__client-id-value">{ids}</span>
          </span>
        </main>

        {/* footer */}
        <hr className="mbo-divider" />
        <footer className="footer">
          <div className="row">
            <div className="col-7">
              <div className="row">
                <div className="col-6">
                  <div className="mbo-card__date-label">Start date</div>
                  <span className="mbo-card__date-value">
                    {moment(startDate).format("MMM")}
                  </span>
                  <span className="mbo-card__date-divider">| </span>
                  <span className="mbo-card__date-value">
                    {moment(startDate).format("DD")}
                  </span>
                  <span className="mbo-card__date-divider"> | </span>
                  <span className="mbo-card__date-value">
                    {moment(startDate).format("YYYY")}
                  </span>
                </div>
                <div className="col-6">
                  <div className="mbo-card__date-label">End date</div>
                  <div className="row">
                    <span className="mbo-card__date-value">
                      {moment(endDate).format("MMM")}
                    </span>
                    <span className="mbo-card__date-divider">|</span>
                    <span className="mbo-card__date-value">
                      {moment(endDate).format("DD")}
                    </span>
                    <span className="mbo-card__date-divider">|</span>
                    <span className="mbo-card__date-value">
                      {moment(endDate).format("YYYY")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5 text-right">
              <div className="mbo-card__amount-label">Total</div>
              <span className="mbo-card__amount-value">$ {amount}</span>
              <span className="mbo-card__amount-currency"> USD</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Card;
