pragma solidity 0.5.9;

contract UniaoEstavel {
    
    constructor (
        address payable Proponente1,
        string memory RGproponente1,
        string memory CPFproponente1,
        address payable Proponente2,
        string memory RGproponente2,
        string memory CPFproponente2) public payable {
    
    }
    
    event UniaoProposta(string msg, uint256 time);
    event UniaoAceita(string msg, uint256 time);
    event Presenteado(string msg, address _from, uint amount);

    event divorcio();
    event saqueAntecipado();
    
    modifier somenteProponente1(address payable Proponente1) {
        require(msg.sender == Proponente1);
        _;
    }
    
    modifier somenteProponente2(address payable Proponente2) {
        require(msg.sender == Proponente2);
        _;
    
    }
    
    function ProporUniao(address payable Proponente1) public {
        require(msg.sender == Proponente1, "Proposta feita");
        emit UniaoProposta("União Afetiva Proposta", now);

        
    }
    
    function AceitarUniao(address payable Proponente2) public {
        require(msg.sender == Proponente2, "Proposta aceita");
        emit UniaoAceita("União Afetiva Estabelecida", now);
        
    }
    
    function EnviarValor(address payable) public payable {
        require(msg.value > 0);
        require(msg.sender.balance >= msg.value); 
        emit Presenteado("Presente Recebido", msg.sender, msg.value);
    }
}
