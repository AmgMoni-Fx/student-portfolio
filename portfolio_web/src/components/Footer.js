import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faPinterest,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAACdCAMAAAAdWzrjAAAA8FBMVEX///8VPm8VPW8WRHrRq2bUrWYAOG/VrmbI0Nvf5OsAN28AOXQANHIAN2wNPXDY3eXcsmUAN3MAKWRlaXFhZG0APHXw8/fS2OLPp174+vsNQHgAMXCAlbK3wdCvvs+ptsk+YI1bdJkjTYDIpWcpVoiaqsBScpqqkmlZYG02W4q4m2igi2nCoWfCzdrk6fD69u84TW7u4MmEemtRW227nWeRgmpramz17d95c2yah2pCU25NWG0nRW+JfWuulGjNpFXgx5wAKm0AJWuLnrd2jatof6Dp2LrUsXLbvYrw5dLkzqgvSW5JZYrZuYAAHGhxb2zkrCx7AAAdmUlEQVR4nO1dB1/iTBMnIdmcIYnkpAjqWaKCgIg06eqDHX35/t/m3Zkt2VCu6D3lhPndSchuEvJn+syGWGxNa1rTmta0pjWtaU1rWtOa1rSmNa1pTWta05rmKfflb6Hz3L99Y/8YbRL376C/Nv7tG/vHaNPTI+TNvP/pscg77auKYCYLxLlyA7Y38dKwJeflcFJGTs+w8WwuepaNWDWrkNyf3dyoVhXGz47v7+/H55nouTey87Spnj7767Kz6Wm6BqTDP520J7p4r+M+Hf/Bhtfow2Qc19lQ+KfjsS1+qgiC+385juPzT3q64zg7Z/BBj2ArXeWTqv+jk3a+0K0vsPXXXmwMh/31TZxlfEvf/m8vdgevjHYccXYgP/56wgHI3DuJdDqdcI7HgOEmnmmfXjw8lh1P6ZZ9sHsYur3/ZQCRBwWAFKSBseWGoDEgdY6SN+oSNsT4LNzQyTQYeAxWdkwUQT9OSSCYj8fzB7B1TLfi6VM+KbMD7xBBh24l9mIbcFRa3hO8yx/nYrvpeEh0/zdfvss7Z/iFZM4SYs8tfAObMMWnCN7nlWPjeTwVu0IWRvJHmfchyMCAP17PaNkqShxZfDsoleYQ5MxI6mbf5WyMQz+NYNzZXYZg7B6x4mc6RxROYt9DkJ7gALjwFKbkE4l0PH+WWY7gTuYVJvpw0UPYcvZ+HUCQYoXsuhVMIntCcvtWsrF4TCclq+vpyp6fRzCe3luG4JcEBw0IgXMyAkGfyaFE8Cjus/2U57LIWocnJ/fpHTxaInjoU9lm/Ec3/spkcfOQXirkxl9HULlxfWAYZsHn6mwGJa9gmpWBOiK3SdsyLCr+v4ggl6XjqkQwH0Ewh3OZmOekSAOC+YNNaUkQweNMdfMuzeE4ScArMGP2tCoRTFAET+52d+/woqe7dCsXG8NI+hw/VTxejb2DmB7ktsJNWRTCgadrqlVg1sKrBYZhpVyhIENjo+lu2QTk+Yn0OUvyXR7kqnABD6oHnsPOdFYiGJ4dEMwfA8iv/NQAZZopB2ZZJA/iheCcCc7ZmQP8krJwcWf/PQByKeaWlUwBwaIbZTOm86iKpAi2bC3EVpobyp6GEXjSJP2CHjwTgroIQXazY5h8J3FbiiAbOWNz40eKTosgWFURjH2By8YBx7Ryzl9DUDgr9MVNUSTMlCuthbC1YImRB6md0QWqwsxQQ1IWCAoT87MIpk+O6NBtdjGCsTHI45HA0v8WIsikuBpBEFE+Fddz4nd7uR8iGLsDZYuG+J1BgGqLKUqAYM2LQKdxmAZN07CmRIVWMKk9tAyzZOvCT9R/GsHENwTpOLNID9K7hZ2JLxwmtKvckuSB/LFA8AyOgy8DdlWPuI1KHO2GenAJgrk4m+zLPe9AUGo1nVBJDQjHTeM6jf+zqahaPU+MSWEG6S9aTMDl2E8jeJLBl/vFPIhOBqg0eGXirHoziANakqPx7j3glj8CyPbiYk7ibPMHCMb20kwZvzeSlx61DgbEL5hW19c8fSDMC4NxQA0I6VhmE1AehOEKmG862xtYoD51d/CrHjVF5Rx9sv3cQgTP0TWObQB7cc9wIYJx5qUkjs5xTvYwn+B8ePAjBJmTiNz/XgQZP9mFvu1Rf9AoEntQbrsRHhtOfdfrWdbQJqTTJdJigIkueMSzm1ZTI36jMOGRyQIEs0sQRI+CujT+AimmoR+dtJOFMwhvjSGYANoRUizoTl528+QgwSZmf4TgfkJqiHcjCGxmd61u7bZvNJ3a0LAari6tAliY5KjhexVLG0wryToRoo1WxAo62m0r2bEb5WSJi30UQbzHPEfwQPp4AkEMIRLjo4UInvhwuxCd7HwJEZy1JPEjsOn5u8itVXcTHLgfIxj/CIIcKWqHLTOg9taA14mn2FrNGwR8zLDMJKAbphbssmUZFRgyTbNs86gvgiD6cj6HBEXmPoJgNS0wmJNiahXo9Ff4c5BTEZz5fs7wGjtMhmMZPvUgz7D6u3mQuy5eyTQ4mSM7NMfIaC3LkBRNZHl9eZiR3CLcGEcQ3EAVx4Qwi0HAbgTB2J4QxHkEmXOnALDMH4QQV2QG7u4ZhKDhEj/Fgx9CEDnN8zSSCqFoUMvhCT6jY97AEINWneAYY0+Kpl8W6FogxN58TJJh6JxkcrkssAW/mRBBCdMCBLN8KCFsJerBsy/nSCGCmFxJoBx/ySdONyRW5/8ED2pecUIooyU5Eh2iu/qUezJer2frJGUxCK0y0T0yHfBob8v1vEGTQWgG1JMkvaI3a0l4ksWPHxz7aCFvqzMI5g6Y5ZzXg9SRwaG01HGIYD7MDwqPGr8F1BUHaeoK3o93mVuY+SGC/m/gQdIx2g4hdUTJ2nKI06sMbZ4W7JlDz/a3AhPDOp84k3LTZzxoV0Y1n0wKAKFZGdi2PU1ibieK4OYt46M8wynBBFpBkHHQQh6MfXNwJBtBUJCCYBVNEZXjfQzU8iwJ4wBUfzsPUkFtJK1SW/sLo7ruoNEZWcmeJxKBBjW3g9sJtSRmc9Jrl00wx0hgRrp95xaiOiNVSw2DZNOei0noh9xREnP+a24Owdi+s4wHc8dhhuZ7CLJTUHWbOXTk1Rxk3U3nb+VBTBsMAmpJg1EBxTGgFtcsSW/Gh2AkKBUCMWYYPW5/yBYNRoxKucmGqBW36mROD1I6f/UTaRqHpdPO0Zh/WMjy3woEWfI+zPLfhokBSO8rb+/UTH2MZfl3IHbOvULW/pYCtX/m4MWcI5b2l1l+RBBT+wqCJ3iCD+pBjdRREBWzOiXCl3GLRnTMKtsiah6AAVeGDGPgzVWagHLZ8f3p6+nh3Z5MwkmPDknUl9QtZSSMuSLVIjkdsZGVo8ze3eHr6f1+VVxcuVQuel1+2Oa7y7M8JtG9igoDFVeiyzQgKVvqmBH0ZKoaImKVrDpLf80h+HkJedBzaXRmKBCaRs3zPBbiUturjRSczGTb1lle1qW2t5NUAEwWXB2/khVD0OsVbY/UmgIm0yrViN+roarT2rbn6eWkKcaCok0GfZBVNzWxdX8qhdiyWp7rNOY86s9NIMVeLehqxB20OBKFlOdr9YCbi9KoRvGdBgynUWfgu1uVDgg5qQcUXtIf4ZBZafVsv1cYzcXFn5sgy6+7TavZIMTuoTnp3pJap2I1WVWJ+tnBVCM2JFgNs0S9wfbItFAT0oDO7E5s4g6Rexu3Wr8bJFtkgS3+xIR1ErtO3ZdycaBjYqFUHgXULWlhEovClKRS3R646PNVuqMKndtk9oJUqFAPaxozJ+VCybSMZG/eo/7UxCwJ1EDMpBEwVQeKzcS6MXgzDnVYIF3D9SDgaKYIy+53LNB+csgET8efyw9+bmJRnR2xqGgVGoSnWGlUNzs29Jmbo3sja2aoybyjFUMQciytCISmkbJlcsueRlxmGna4ou3Dq1UiEFojTFIv8Kg/L/GYRHdbQSBwMs1Rn4g0NFRG2hU5ZliVFNFlL41bGwUK7q2Bp81ntzhlNr7s7anBQCyj0pIDvmxkZg9Y9EaeLPpeRhq570/+AIm+GZ1MpoKfKm1NKbqDPR70Zfq1PiDqkKfVutwXNws9IoKVeQQz44O04/tO/HBP3tbd2YGk09kDqvyA9MFYon4IM0V3yz09+ky2upyzc50KVKqv9N3ZODosrpw5xsnHv0NSNj2RzffsPgbHhtX1lV5ApgvJpBMwp8/2RNcH/+s50wJzCCnjiiaROQT3j3yeMMk7r2LwMJ2XdDx7QDohDvDzIj99Rg+Q/XKn8OZQzL9P4GkcnuiPbRxhRVlkJPYceCsQ3HfCevNvQZDD4TroG1tTwWWyH5BiuMNyD9gdoxCWSmqMB5WGpVkE7xwlJZW+PRcIyn2zCN7vKAfEd3h+9UBNdGHVTyLIOwbzgilZgVQ2z+3heE45FCa//oZ270gXMPbNgEcnKyS8cIQmGfmzLiohmmgMAfZFJgwcqR5nvRlsrYjnEz5rUYv75wqCaaDEUfQAnx3gOIwT/bsfIIilFugGO6pGEBTdMIig4MENLE7FWSn0tyDI6+q61wAkkgPZ1aFUm7wJZG+stqv21PAZdhc6lka+RHaGB78hQyVOT/a+7R5hkp51vCGCZ+NdoIhAfeN9BCfne+MDeu/pOKsdLUcQCglH0PYmUrOCBxO78wjCvPR+Xg7+HgQRJXT9LKVIJ7KsOuubgfa3mVFEEEp5Zlm0v81KMTZ2xBNj/PwbB2l5X4BgfkHbY441CLP0aOZuJ37HGx6WIpjBAh50jgg1KRCMM82oSjH2JR5v0JPJEupHECRsOQT+JRNEUCOuXCMRbmA11Er5bCZR5rgO6EizsAP72TGR1RAs/S5KRVXsvERhW4Yg3m5a8sdYnmwpglBMSYyxcOBkQgRF6STKg5vsslAuSL+72UPSRkqlNiLYTi0klOJWccFIsYsxszJUVN0+FNYwjY5NINjJtgxBrO35C7y1pQjCEeksiievhzAeRJQOZxAcs1lQpE/fzV/kF+kqGSELKLmEvjM2N3QRXgKZTulRzhwJlmSW5BgorjaQohVBoKrncpnUBkcwzlvf2BZDsIrNOBks+XGEEUHnCxwBTouCIJZWE9VYDr/YD4vxxtbfQioPbuSjxTHWrXsqEUQ4Ii24YV/DNyfNCXv+DyK9+CGC2JkE38lZXjAvQzCLtdL8uYoggznHGfc89kECPUiI+udH5LJ5i+aG+1Q9uIGmI0QobDBX/EFfRRD7LtE4fxMLQxiiyxCEE6HFAKllp2IIniNM+eOcgiA0JLG+ucTvEGNlTRO3u6qzHPYJSveZzxab6sImpSFJtcW4siYReivY/Y3K6ZCv+6B0O8eDrKNGIognYAhyrgwRZFYDWA8WUKSxjV8gyHuxv4QIYkMdVvTQYH0cQd6vpisQCa9OiUmEGy2xDOM+AbTa5a8iGCLGCFu1kKXQkhycIKm+7Zm0Ed/+2tlxHMmkaEkOsqgXsQWHzcKa+T2kCjawA6yqIBg730HDFRcIfmF2DdIOcAbno2LMO9GjDqCmyWgkEoAITo3s16Jv9fk+atZXtCnejrGt7zy23BbjjDRT+5RiAMZONrbUFr9iSx0s0kGWRRGVCKLU5k+PBILKip54/DeIMYvqNH0Gx5lefoGhJnxvGeyFkZ9AWJvLUbO1IOLGz5EbsMtiGYLYrxXK/bmUtsUIbs4qRzATIYK5U6FuEcFZVRr/YI6LVdxDLtI1lZU8Yts28WaAFXtVLCM8OhOTsFtIH4Jw5fawo4p1zi9DkC+M4/FZ9khI/RIETxIzmOQ3VQRjm0ciy5PjQq3SuxbTRRFUJDPKjMSrTVvd1rSnEymuUIHv4d6aTua4VYr/TO8Wk5f4/e7uK+sbZ53zSxHE9W5UwM6r1fPdeLhiazGCoDbjR8eMhNVREAxbrXNCiPlk/G7etZpORVBZ/cWtLDMHnl8cWYxKbYevFKN7t0pi79aOkhoLX2YtSSzGG9LAiCIaeb6CbSmC/IC0Q+0Ia2JjpnohgtjbtiPULC6qO4giyHNDwIO4Pi8hFi3jgtGjdy2nUxDUxZqmUOfBP08rJE0TQg3LMpMjjTVPkwHdC/twb0ETeTBpthd1oscg2aL0rPmi1Ww5gjSWVg7IO9wfX4jgmK2YEDeEK3uyUQQZmwKCeygO4tNhuPTO9XQhgqEYRjIu2sgyjXKqNpgUu4ZlVWogs26tSfd2i7VBLVU2TGuEqxgjppzhOZej3rz3Of/58bGIpA5pxOEsEaLsq4MH5PPpnVcJhJ9O+wLBV/7mKJFO70iLmsO3u9QLpa+3MmMNa94TiVzsnl7SP5BXoZ8q7cwVGH4RQV2ynfQM6ZbfssygQe2FR+1Gj6LZrHmaN2lS4e0R3Ev6AZTlFY9GuNML6ySx7N3BEdVWhyeh0JxAYnAZB+TO717Pjo7OXu/CB4dgKvFEPfoklrmDha6hO7nPso0ZeLmTLtQ3TELGcngG+eSB2DkcPP6QNVaz/IrH7E0sw2jb3HF2KUNaBU+3C5Y5wioUTMXOt56neNZh6LKw2pmrbmz8ks7JVauRx0/8J2n2WR+cIUndMgtYMnZBej0Nkl5+ClaaQIrVxTzrTsG06vas+C+W4s9L3KOOBse4oN0qoubrtzXCFtVVnJJpdWwofm41oE3dbRhmyRfLF/UwMFmxngURm0VyA3rFrMC6JjK1YKUdhRT6GCzcSYqBlewQqDAFZkBCW6zo0pVCUIZiilOnaxWzBN1vbsqwYJ2I5pdNc2RSyYY2JerlwOMCdJ8iGK6wU3Izq4WgrksTojgkTcaDVFJHpjW0QYwNtlYHVOSoAcV1zoNhWKdJFl4tBIULo2ZkXK4HqR0mFnS0sYZ+WPNpd61gYjNjLPTgXBpnpRBUvJjQIcHl2APwWzwPlhXDs3zMANe420MrqLmIbYVaFqKFsvsDb+ZzkhoXK6QTquwqDcf2vbJlNTx8pMzQstqEyrVplV3f9vtNeACNJ/KtunqilUJQFwloPTSm1CFsQLvqaNiqmMkurOAcUdmlxsSDJ3tQm9wajmACmGk9tMUiQF4tKVYdYm6Xgexik6VgzLJGPZgUZTzqQZuwlkSDQBmo0iDSn5bFEnyzYghGohGRiKZ+9LQQBJVu0acAUg/G6NtF6tn0qBEhxW4lCApTTXl2SlirWj1LIiDjHXA+8fhKMeI7vmN7uusUIYlgaw7ka4o7ru7adMRnz1vQPZdOJFE9uloIqgbE32oW6sUJ8W3iup7nuRQdt1iwYP26a5MJZcVkoej5hLgw6BLbJ5NivVzZsj3xRayiLRbeMBl0qXmgrnMwanXaqWKjUWx3ygEN6Kh/bffrVI5h2wjK9TYMptqdFvRRW6ZpdgdEKoBVk2KuvuhLsRIurQMbgq+4gKQ0oaowaQzsYsCHsUeJTeId6lsiUbZytliTVqRlhcseTEjxm3wdhDnSCHWpkzXXZk/9MCPDDNQykSXR1UJQMg7VgsXAQgZLJo1modtqtbqFppWEhUtNjdSDIcHHptA9FTFqJBkfWsGWr+RaVwpBXXHkiNe1jFK309ccx7eRHLtB3T9qSXS66bfgqQDdBnFwzPcdx+t3uiMj2dWI6lmvHIIyHPG82kAnvMbuuTY1ydRZmVBcMUHTNg2rPMF9Ns6CJCHdGPQ88fwubSVzM1qYXNY9T6T5SG2r3qoXB/CAmQ740q5Gg+U6BY4MGnRkqyY8GN2TT9LkcrxaCIZtM2rV0tOGAbamNlNUPp2WZbV26vSPT2U9xYruQUsL+5bUkt2q8aCuYBhqMq1kmbDw1YKEjA65msCrQC5Gt9t0wAig5F4azBWqVlMPhncuuYgGcIbZ0nacfgUeW4FLiacWlOa8CfWv+zs72pAqxYI7j94K+oNa6NCIPKEHteAiVDJJLQlpVK9P3Wp8OgDk+xvwxFDSx8feLkgurpo3o3auiow96SK/Qd7AseAJPV4DA4++B8tvggE+LtivUzfalxlWXaSpV48HpQ4My25eCSt01L3RqOx2wZHBShNViRCV1DU8bEDl2VfdQJlmXTkEQ4dQ4IDVTni+com6gkWGW8WgWGqkSPVfcwL6k1U7Ff25kggqSlD4NKzi3oQSCKknzeTQ1TWfGhT+MGC/lbSSLXheKBpo2bOg6MFVQnBDkzkp+R8CjZFp9CFtM2gVtgg8vcyk7EYdanAOyVa5C+V4qN9VfKFEwyZC8Kg/1tX4J1F1wGORCBuhJYFfKtE84kJl06Z2eLgztMwSluEJPi3FHoKKFNVS+UUggr/lEQZ/BGXOPFX8xIbXoD4zDeN4nIuNRxMPmHDo8ygEHs6qejORoqn9X+9Z+4306opsQMQzdkqmWXJZSwchHROf0gNNCtTJYb98QKikI0uGlkTaIv3jC/7+HLp3dT2KAXNnavAIuKILtabiyMJH5mn4oLfkqEjoXgJ7jZ4rMhK60nyjua//9m39g3RiawuJ9OHhW0ZzVDLgtcim2UW+twlPDA36ZPHB7seX7f45lP0abXyTm26tDCUk+GcUaoQPuhNl78SdPZArQ/u9P1XxJxI1Jaoh1kM8PNKrjyqVSmnY9zwe+sHzMvvDEuyt94nooRZtb7KD5utveIbGn0O7rnBElOwK8+482/YGmm+LDBhTeLjXE3tFglZGMzDN/rdv6h+lza8673qJJqjUYC000sqmCKPD1Cq3I5r7wYVWfxrdu4owKgptJme1hKJalL2zV0qIaVhie5KpwgTNfOpeei2ySU4mw2SCG+e7hz++6OeifVuCJWVTbaiUmYPQ7wtrAkrPodSDmz++5iejsa2kBYRWVORTxHG63NIi5akQQHRlPrbS78+kk69huVILZVMT7KhJ9gzNTZhGENjxQufveCTdn0dfjmy5TFZ4hgp00lSoTneYyxEyT6F0v35wyfgfS7mxZruqSIqEl6IPJScqjosQaRx1bfd+dRKDc1Q9eXVtTxXI0K1RfBslIa2Hu3XPo/C9jlcnNQ10QSmyI5cdv2o2JK8U3051DKWSVGw0a6/xBgf3++ovVFxcXT48PF/EPjE9vG1fX18bTw/Ru9w4H7/SsA1zgBHlF9lg7wA6Ct7B/Un0Eb+x2OUTnPz6evvm02J48XZ9/XZzc0Nh3H6ZG63undwff/3KcJRejIzoYMN1v37VDsffsgvS+ReP19tPD5eXlw9047NC+HL9dsW2nt+ubxZOyWX3d1/dr66ruC9cmF376+t4b5nNuHjc5me8uri5nv9+PgfdbF9cPjIBft7evlw2LZc536VC7aqWxbW1w5Pvrd1/YCe8uHrafogJMD8dUQQpco83D5cPb8YCOVYot3FC7YtQi659dvIDg/uybRhPN0+P9PwXV5+WB1+2n2KX9B6RHn+oqzapt4i/imO/7i3jvosrfpqLG37em4urR8qGn5OopD0+x55fnt6eXlCGry5fnh6Nx7eXZWjun311v74ue/Dr1SOaXsrUoF4vqCdzeQVQGss1xB9Oz1TSth9fONs83xjU+zAeHymGV0uP2XtdHrBd3ABRyb1mZ724eH6hLE4vsvx8fzZdbEMzG2XEt6cn0FjGzSX1r6+uri6+I9HfsR5Xz8/PcPDFA5wMvoptvILxab2ZC7mSZhs55YXy4dsj0vN7zkeZ99EwDaoEXrbVHywxtn/3J/+v0MVb9D4frq6NS8qCz9THec/5rGcwJc9P1w8PUQQff/cn/8/Q03YUwUsqe+gfvr0LwWuq+q4enuiJZhB8+s2f+79DN/MIgup6ejFurn5ddV1x/2UOwU/rUM8heAkIwsrYbarNqHl5eXj+rlHhdAEpGKpA2dJEU3wVyok/q0MNDtz2HIJmoVw2cM0r8JP5SJG8uXl5uGRWNiRQlw8PLzdPb2By6UxYkmw2WyVzBsFt8/PmZij7oN8hbvUZbtzqtJxSq5OatipBgGuIzW1Jch2sso//7m6l0k22R/16L4Ig6ITP6gxyurh8ElBcI4JGset1poVWr1scDFrBtG5UmgasfQUwcREs/2/iQ0QNyyyNrGEx0DqT5LTVn7YAwedrdsbt2czjJyUazN1Qn/rpChAMauVpox+UO8liNzBqrXanU5t0hi2r3Cs2W1vTplHfKlndXrdZm6TaA22YLE7MoV+otftGdxq0ih1r++HigdLl585OLySKoNnsdUbFWrLeMvpbjXLKKFRS3XK/3k3Wh91Uozws1tvl3qhWSpX7QdDpBlqykSqXe43i1rQw2qrXp4Dgv30j/xqhFFcKQXmaTBUqvWZQ2Ap69WJ/MmoXkvVGsd5op4a9SjKVqifNptbotIbWpFkr9krtQbtYqPXqQacTmNeri+DV26NJjSr8eF/JqKT6vaDXaXRrQX9ULCU7nbLZH9Yq/WayOG0nu6NeQKGuDMqNAuVVCqYxGhlmMmksT+2sAl08PzyZ3OpaFvygc9mcGt2tRsVql61kLai3u712L5i0ayWtXysPauVyIdksBdz7eXtZQeU3T5AmNNCawlNkDAvMMDUx1LcZGUY5WegGZlAOjEoALGcyb+fafHt5+OR+yy8SjXBfaKAhvT50+4AzDXSdTekmmo9PN5+8KPwRwogNfJ03SHuFyZbHtzcaq2Co8hNx35qARCwng7t/+wOtaU1rWtOa1rSmNa1pTWta05rWtKZ/kP4P4peL3ONDIwAAAAAASUVORK5CYII="
            alt="SKILL DECK"
          />
        </div>

        {/* Main Footer Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>Built For Creatives</h3>
            <ul>
              <li>
                <a href="/assets">Sell Creative Assets</a>
              </li>
              <li>
                <a href="/services">Sell Freelance Services</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Find Talent</h3>
            <ul>
              <li>
                <a href="/jobs/post">Post a Job</a>
              </li>
              <li>
                <a href="/designers">Graphic Designers</a>
              </li>
              <li>
                <a href="/photographers">Photographers</a>
              </li>
              <li>
                <a href="/editors">Video Editors</a>
              </li>
              <li>
                <a href="/web-designers">Web Designers</a>
              </li>
              <li>
                <a href="/illustrators">Illustrators</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>SKILL DECK</h3>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/help">Help Center</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Social</h3>
            <ul className="social-links">
              <li>
                <a href="/instagram">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </li>
              <li>
                <a href="/twitter">
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </li>
              <li>
                <a href="/pinterest">
                  <FontAwesomeIcon icon={faPinterest} /> Pinterest
                </a>
              </li>
              <li>
                <a href="/facebook">
                  <FontAwesomeIcon icon={faFacebookF} /> Facebook
                </a>
              </li>
              <li>
                <a href="/linkedin">
                  <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="adobe-logo">
            <span>© 2025.All rights reserved.</span>
          </div>
          <div className="footer-bottom-links">
            <select className="language-select">
              <option value="en">English</option>
              {/* Add more language options */}
            </select>
            <a href="/privacy">Privacy</a>
            <a href="/community">Community</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
