constant @input = "input.txt".IO.lines;

my %results;


for @input -> $instruction {
  my $type = ~($instruction ~~ / AND | SHIFT | NOT / // "NONE");
  say "$type: === $instruction";
  given $type {
    when "AND" { funcAND($instruction) }
  }
}

sub funcAND ($instruction) {
  my ($left, $, $right, $, $target) = $instruction.words;
  say +$left +& +$right;
}