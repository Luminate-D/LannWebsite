import React from 'react';
import sc from 'styled-components';
import { ITheme } from '../css/theme';

const Wrapper = sc.div`
    display: flex;
    width: 100%;
    height: max-content;
    justify-content: center;
`;

const Key = sc.span`
    display: flex;
    width: max-content;
    font-size: 16px;
    padding: 0.5em 1em;
    border-radius: 0.5em;
    font-family: 'Roboto Mono';
    margin: 1em;
    background-color: ${(props: ITheme) => props.theme.bgDark};
`;
export function PGPPage() {
    return <Wrapper>
        <Key>
            -----BEGIN PGP PUBLIC KEY BLOCK-----<br />
            mQINBGOFwqIBEAClR1npJWV+YwCJX2olFIjGGFPvpNjkk6lbkelh/X4ZsfJmbWVe<br />
            lJqI1y9xG6FdGtJueROM8XME2WJtG4+YlnOksM6UA9qkdADrx0uVjb5/IUB6DAdM<br />
            BCweIai+8FaFrnpOYUKtumeZVVYWoyPA/+M7/kh1LFLilBUahfUtui18gCP2ebqU<br />
            7/Mg1ijU8ZpCfUG9jIDy235WUAQsQgivnlYtB2hHJUulQuZRI+sq32Rnjif9BT/w<br />
            y5x2gS737aZ7B9LuCZi98n2remJ765wl5057dZFq/hQIf0dIcTmmbJNaFuPxdjBZ<br />
            PO9ldwOCigAao6jit9Aeo+f8tU5RnMwFOjlpWjVfLipMEolblXMHJOeFPRlxU3Re<br />
            mn8H6K1rRVZRt7Ci2UXxi/Y0H2z53NW3quhMur8FU+lTUW2J5f0hCuPteW3pt58h<br />
            tvLE55EvvAAn4wOjW6HeYwBlLMTookd2wW01yNzn0F/FkLVBe4oh7AmuBycXQkxY<br />
            Dzq+dl/F3FusQeaWegn17GFwmVAamhMysggIU+6NnHtKzrMlE2EygNyv8xfhkumF<br />
            c+sWng6ahFC9A/g4p5Tujt2nKHaJbEMr++sBc2sk4ojOXNg7vaOt36VmNmnVA7y8<br />
            BEC+DM5xxn40fB7Se3AQloiVZOizDcrLRjmmknOsFcxSDpZVyfuXNFhWZwARAQAB<br />
            tDhSb21hbiBZZXJjaHlrIChXLiBBdXRob3JpdHkpIDxsYW5uLndhdXRob3JpdHlA<br />
            Z21haWwuY29tPokCTgQTAQgAOBYhBN9Z5HE5vHVIh4CVTnHR42aA/W1eBQJjhcKi<br />
            AhsDBQsJCAcCBhUKCQgLAgQWAgMBAh4BAheAAAoJEHHR42aA/W1emkUP/jBAqtro<br />
            NviuFzEmEsi+ryS1Ygw00MAkrj7LjzZnsF/RlYcxqMvV9FA4WYKepQd0J3rAr2hc<br />
            idFZzzHG4mzc87nKSM/RMBsokDP5eIJJivCX6gnttSl0dKsjYP6Pe24lDnCNacWJ<br />
            FyzHjTStI9Ouwsm9CzAdimAYqX1ze8mhm2GNpD+52di/NQ0pZcjFWYSLPdp4fX2T<br />
            sDUZYen4oKYs9+/ouBpStq6EGBqP2DgUPRzFnxR1NENQ9tkITR0MHZFU4TZPKqGX<br />
            lTgQmG6d2fYjHSn79Vt14NszHlWwBgSA4xTwwKo6bLCR4iV5Gvzt5NIvoAb/+PSw<br />
            SdN/n/7jWDLcpEogFk2LnP6bru6DvWw6P82iSoU8qmEzsto7EJBgg7r1fDiJI5XX<br />
            kbL/SrLhNaR8OXoDhmFBmPhBLW/XEYPgHsAACwKovdwc4zKssUK2zySX9R750agC<br />
            HRo95NlMPFH+e0ImYXb1ZEbQ1huNvQrOTK/9DeoZ6CymNhCQAXYHa8gJK+lcsCRI<br />
            7m+2qQvnsgHaMgVbt83zMFFAapgV9zc5gnkLEYfJH7Vy5uuMe/2rIwWhP5blyhol<br />
            Ym0GnowdGPWvmaSGqJ79EnZ96OJy3B4xgvX8ilYXl+A2H3Ic1EcEnY3YjPDqvF7C<br />
            x4AI72F1ARMCj8aTDUIhm1M85HnBVigvYC2XuQINBGOFwqIBEADCBkKK12W3318Q<br />
            DhMMIST7fd78S+UCHxmGwSmhJCUlgU6fpcQ4ocm7h+zmPZTCA/8VFKmGxi8lU2Hl<br />
            /80WlY0Zf+1sByYdFPQk+iyHgIphSqKP6B2wR5jCEO7JLgpJB8yDf1BZVrhrPz3m<br />
            DEjumEgmaZIS/iOxtOu5qGYx9Ndn0zMRyxO+daoBm2McOp7HCDg5kaWQRyALV3ao<br />
            C25gzbkPQnKbesnNnzM8mBoaOqxO3gpaWTxQw2CVCPPy0mlR1F6gM1MTBW/UWsX/<br />
            ytWCttW0X4C0WxTLE/AnSBQ3FZW0FSXHj9nDUy4bPj2JVIo3OEyQum82byrSw6yH<br />
            TUUTfoJDjoRNzZzEPHQ62+X/PEtObMrciaJy97+NTnILKdROlLo1P1uVRnrM0pZk<br />
            xSsDttERtqbzZuDxC5YxZfoATd1jT0ZPID2FfkLLavVqmOefYQ7SDRhUauiyw0RR<br />
            d1rmYgRdUK9No0PpjSS7uP4tlqnzfwpMrwYxaFmbVHK+5/SfBpgL9il4VqMQe/WQ<br />
            C1X2Gh4T5bHDoP0a+WPPw0B46UaDlmTx081O+Jn19p9AX7vn8YBlXe7spGXrgsfB<br />
            A460KOKJ0uyJHzWilDyCOxOKpj41Y2bdO5+7U0KEoZrdPWIDh5Hr8vH5kD7rKEBh<br />
            ntmern0TUUJiH1EJ9Y0Y6Cf/MHiozQARAQABiQI2BBgBCAAgFiEE31nkcTm8dUiH<br />
            gJVOcdHjZoD9bV4FAmOFwqICGwwACgkQcdHjZoD9bV7SDQ/+M45ZFXWem9uHVyXY<br />
            DJ0aovX3Bq/+MpIkkJl0RJrYJLImG0CwKuZmCVHtVUZVv+jSim8EdWodXEOs9qIS<br />
            K1Z5TEguwLorHVfmowcFKqiu0Zihz0nAW0pNmu469uB2qQNNO8DIVOVRa65uJjcg<br />
            e+2xhx/OSZP5vZQDJdYH5lBESRV3iMVI1msJ1EVG+8/I9wMnvka1hjWWe+JuAHSv<br />
            TttVWjT5smAcW/HhguTr9h080toO0zlpg1Bsgin0NgbTPa7rPhAFlbXy4ZdbzunX<br />
            vDFa4Qysq57a4ennnpW654YQRPUCzT3J70d8DxQJCyQG0ZZcY3+FZizBLriW2B7O<br />
            bqDn8+4LvrIzOPIm6BTQia5cFNuVZc6qDQYZU5/m+pfh1lmBHBv0IqFFB/8oDnsp<br />
            RhlPIFMTMCnQ8sgN5tx3z0pqZqsnKeEDOReB1EU5ASS1kafk0ZeTdhaTulbvwnjJ<br />
            KDP4uJY+zhjpJ1aVmvOokwAHi912qCUPqbFNHjevxpa9dUcOj08tEoWY7rhO+ENu<br />
            sji3oBZzTq4QYvR3DufuGu5GQJr/7lGdJIWMZ++ZjYHeVB6+LJLrZhMzMbpHEkdb<br />
            odjZLzV9OqtHraSoklR3qD2OibqtviPDmUieLLEZ5bwkoLgSuMcoUVe+nsbvj6k1<br />
            rIdIw+gZd3i9RdDZ8iB3lCz6WS4=<br />
            =dPI1<br />
            -----END PGP PUBLIC KEY BLOCK-----
        </Key>
    </Wrapper>
}