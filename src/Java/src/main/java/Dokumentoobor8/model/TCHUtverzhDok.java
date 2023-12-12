package Dokumentoobor8.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dokumentoobor8.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧУтвержДок
 */
@Entity(name = "IISDokumentoobor8ТЧУтвержДок")
@Table(schema = "public", name = "ТЧУтвержДок")
public class TCHUtverzhDok {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "UtverzhdenieDok")
    @Convert("UtverzhdenieDok")
    @Column(name = "УтверждениеДок", length = 16, unique = true, nullable = false)
    private UUID _utverzhdeniedokid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "UtverzhdenieDok", insertable = false, updatable = false)
    private UtverzhdenieDok utverzhdeniedok;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "XrDok")
    @Convert("XrDok")
    @Column(name = "ДокументНеУт", length = 16, unique = true, nullable = false)
    private UUID _xrdokid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "XrDok", insertable = false, updatable = false)
    private XrDok xrdok;


    public TCHUtverzhDok() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}