pragma solidity 0.5.9;

contract UniaoEstavel {
    
    constructor (
        address payable Proponente1,
        uint RGproponente1,
        uint CPFproponente1,
        address payable Proponente2,
        uint RGproponente2,
        uint CPFproponente2) public payable {
    
    }
    
    event UniaoAceita(string msg, uint256 time); //event Status(string msg, address user, uint256 time);
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
    
    function ProporUniao(address payable Proponente1) public view {
        require(msg.sender == Proponente1, "Proposta feita");
        
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

     
    
    //enum state
    // emitir tokens ERC20 para quem contratar pelo site
    // futuro ICO
}
